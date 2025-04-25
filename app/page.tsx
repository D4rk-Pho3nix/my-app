"use client"

import type React from "react"

import { useEffect, useState, useCallback, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, ChevronDown, MapPin, Building } from "lucide-react"
import InitialsAvatar from "./components/InitialsAvatar"

// Update the interface to ensure all properties are properly typed
interface Doctor {
  id: number
  name: string
  specialty: string[]
  qualification: string
  experience: number
  clinic: string | { name: string; address: string } // Updated to handle both string and object
  location: string
  fees: number
  consultationModes: string[]
  image?: string // Add optional image field
}

// Sample doctor data to ensure the app works without API
const sampleDoctors: Doctor[] = [
  {
    id: 1,
    name: "Munaf Inamdar",
    specialty: ["General Physician"],
    qualification: "MBBS, MD-General Medicine",
    experience: 27,
    clinic: "Apex Multispeciality and Maternity Hospital",
    location: "Kondhawa Khurd",
    fees: 600,
    consultationModes: ["Video Consult", "In Clinic"],
    image: "/doctor-1.jpg"
  },
  {
    id: 2,
    name: "Subhash Bajaj",
    specialty: ["General Physician"],
    qualification: "MBBS, Diploma in Cardiology",
    experience: 11,
    clinic: "Dr. Bajaj Wellness Clinic",
    location: "Wanowrie",
    fees: 600,
    consultationModes: ["In Clinic"],
    image: "/doctor-2.jpg"
  },
  {
    id: 3,
    name: "Mufaddal Zakir",
    specialty: ["General Physician"],
    qualification: "MBBS",
    experience: 27,
    clinic: "Sparsh Polyclinic",
    location: "Kondhawa",
    fees: 600,
    consultationModes: ["Video Consult", "In Clinic"],
    image: "/doctor-3.jpg"
  },
  {
    id: 4,
    name: "Ajay Gangoli",
    specialty: ["General Physician"],
    qualification: "MBBS",
    experience: 34,
    clinic: "Niramaya Clinic",
    location: "Wanowrie",
    fees: 400,
    consultationModes: ["In Clinic"],
    image: "/doctor-4.jpg"
  },
  {
    id: 5,
    name: "Khushi Patel",
    specialty: ["Dentist"],
    qualification: "BDS, MDS-Orthodontics",
    experience: 31,
    clinic: "Dr Khushi's Dental Planet",
    location: "Wanowrie",
    fees: 300,
    consultationModes: ["In Clinic"],
    image: "/doctor-1.jpg"
  },
  {
    id: 6,
    name: "Chhaya Vora",
    specialty: ["Neurologist"],
    qualification: "MBBS, MD-Neurology",
    experience: 39,
    clinic: "Dr. Chaya Vora",
    location: "Kondhawa",
    fees: 400,
    consultationModes: ["Video Consult", "In Clinic"],
    image: "/doctor-2.jpg"
  },
  {
    id: 7,
    name: "Kshitija Jagdale",
    specialty: ["Dentist"],
    qualification: "BDS, MDS",
    experience: 13,
    clinic: "The Dent Inn Advanced Dental Clinic",
    location: "Wanowrie",
    fees: 500,
    consultationModes: ["In Clinic"],
    image: "/doctor-3.jpg"
  },
  {
    id: 8,
    name: "Murtuza Agashiwala",
    specialty: ["Oncologist"],
    qualification: "MBBS, MD-Oncology",
    experience: 19,
    clinic: "Dr Murtaza M. Agashiwala's Clinic",
    location: "Kondhawa",
    fees: 250,
    consultationModes: ["Video Consult", "In Clinic"],
    image: "/doctor-4.jpg"
  }
];

// Create a wrapper to handle the useSearchParams hook
function DoctorListingWithSearchParams() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<Doctor[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [specialties, setSpecialties] = useState<string[]>([])
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [consultationMode, setConsultationMode] = useState<string>("")
  const [sortBy, setSortBy] = useState<string>("")
  const [showSpecialtiesDropdown, setShowSpecialtiesDropdown] = useState(true)
  const [showConsultationDropdown, setShowConsultationDropdown] = useState(true)
  const [showSortDropdown, setShowSortDropdown] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()
  const searchParams = useSearchParams()

  // Helper function to safely get clinic name
  const getClinicName = (clinic: string | { name: string; address: string }): string => {
    if (typeof clinic === "string") {
      return clinic
    }
    return clinic?.name || "Unknown Clinic"
  }

  // Load doctor data
  useEffect(() => {
    setIsLoading(true)
    
    // Use sample data for reliability
    try {
      const doctorData = sampleDoctors;
      setDoctors(doctorData)
      setFilteredDoctors(doctorData)

      // Extract unique specialties
      const allSpecialties = doctorData.flatMap((doctor: Doctor) =>
        Array.isArray(doctor.specialty) ? doctor.specialty : [],
      )
      const uniqueSpecialties = [...new Set(allSpecialties)].sort()
      setSpecialties(uniqueSpecialties)
    } catch (error) {
      console.error("Error setting up doctors:", error)
      setDoctors([])
      setFilteredDoctors([])
      setSpecialties([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    // Apply URL params on initial load
    const mode = searchParams.get("mode")
    const specs = searchParams.get("specialties")
    const sort = searchParams.get("sort")
    const search = searchParams.get("search")

    if (mode) setConsultationMode(mode)
    if (specs) setSelectedSpecialties(specs.split(","))
    if (sort) setSortBy(sort)
    if (search) setSearchTerm(search)
  }, [searchParams])

  const updateQueryParams = useCallback(() => {
    const params = new URLSearchParams()

    if (consultationMode) params.set("mode", consultationMode)
    if (selectedSpecialties.length > 0) params.set("specialties", selectedSpecialties.join(","))
    if (sortBy) params.set("sort", sortBy)
    if (searchTerm) params.set("search", searchTerm)

    const queryString = params.toString()
    router.push(queryString ? `?${queryString}` : "/", { scroll: false })
  }, [consultationMode, selectedSpecialties, sortBy, searchTerm, router])

  const applyFilters = useCallback(() => {
    let result = [...doctors]

    // Apply search filter
    if (searchTerm) {
      result = result.filter((doctor) => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doctor.specialty && doctor.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    }

    // Apply specialty filter
    if (selectedSpecialties.length > 0) {
      result = result.filter((doctor) => selectedSpecialties.some((specialty) => doctor.specialty.includes(specialty)))
    }

    // Apply consultation mode filter
    if (consultationMode) {
      if (consultationMode === "Video Consult") {
        result = result.filter((doctor) => doctor.consultationModes.includes("Video Consult"))
      } else if (consultationMode === "In Clinic") {
        result = result.filter((doctor) => doctor.consultationModes.includes("In Clinic"))
      }
    }

    // Apply sorting
    if (sortBy === "fees") {
      result.sort((a, b) => a.fees - b.fees)
    } else if (sortBy === "experience") {
      result.sort((a, b) => b.experience - a.experience)
    }

    setFilteredDoctors(result)
  }, [doctors, searchTerm, selectedSpecialties, consultationMode, sortBy])

  useEffect(() => {
    // Apply filters whenever filter state changes
    if (doctors.length > 0) {
      applyFilters()
      updateQueryParams()
    }
  }, [doctors, selectedSpecialties, consultationMode, sortBy, searchTerm, applyFilters, updateQueryParams])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim()) {
      const matches = doctors.filter((doctor) => 
        doctor.name.toLowerCase().includes(value.toLowerCase()) ||
        (doctor.specialty && doctor.specialty.some(s => s.toLowerCase().includes(value.toLowerCase())))
      ).slice(0, 3)
      setSuggestions(matches)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (doctor: Doctor) => {
    setSearchTerm(doctor.name)
    setShowSuggestions(false)
    applyFilters()
  }

  const handleSpecialtyChange = (specialty: string) => {
    if (!specialty) return

    setSelectedSpecialties((prev) => {
      if (prev.includes(specialty)) {
        return prev.filter((s) => s !== specialty)
      } else {
        return [...prev, specialty]
      }
    })
  }

  const handleConsultationModeChange = (mode: string) => {
    setConsultationMode((prev) => (prev === mode ? "" : mode))
  }

  const handleSortChange = (sort: string) => {
    setSortBy((prev) => (prev === sort ? "" : sort))
  }

  const clearAllFilters = () => {
    setSelectedSpecialties([])
    setConsultationMode("")
    setSortBy("")
    setSearchTerm("")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Primary header */}
      <header className="bg-blue-800 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-white text-2xl font-semibold mb-4">Find & Book Doctor Appointments</h1>
          <div className="relative w-full max-w-3xl">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder="Search Symptoms, Doctors, Specialists, Clinics"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
              data-testid="autocomplete-input"
            />

            {/* Autocomplete suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-20 w-full top-full search-dropdown">
                {suggestions.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="search-dropdown-item flex items-center justify-between"
                    onClick={() => handleSuggestionClick(doctor)}
                    data-testid="suggestion-item"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <InitialsAvatar 
                          name={doctor.name} 
                          size={40}
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{doctor.name.startsWith('Dr.') ? doctor.name : `Dr. ${doctor.name}`}</div>
                        <div className="text-gray-600 text-sm">
                          {doctor.specialty && doctor.specialty.length > 0 ? doctor.specialty[0] : "General Physician"}
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronDown className="transform -rotate-90 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="w-full md:w-72 shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              <button 
                className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors" 
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </div>

            {/* Sort by dropdown */}
            <div className="mb-6 border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3 group"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                <h3 className="text-base font-medium text-gray-700">Sort by</h3>
                <ChevronDown 
                  className={`transform ${showSortDropdown ? "rotate-180" : ""} text-gray-400 transition-transform group-hover:text-gray-600`} 
                  size={18} 
                />
              </div>
              {showSortDropdown && (
                <div className="space-y-3 mb-2 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="price"
                      name="sort"
                      checked={sortBy === "fees"}
                      onChange={() => handleSortChange("fees")}
                      className="h-4 w-4 text-blue-600 cursor-pointer"
                    />
                    <label htmlFor="price" className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                      Price: Low-High
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="experience"
                      name="sort"
                      checked={sortBy === "experience"}
                      onChange={() => handleSortChange("experience")}
                      className="h-4 w-4 text-blue-600 cursor-pointer"
                    />
                    <label htmlFor="experience" className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                      Experience: Most Experience first
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Specialties dropdown */}
            <div className="mb-6 border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3 group"
                onClick={() => setShowSpecialtiesDropdown(!showSpecialtiesDropdown)}
              >
                <h3 className="text-base font-medium text-gray-700">Specialities</h3>
                <ChevronDown 
                  className={`transform ${showSpecialtiesDropdown ? "rotate-180" : ""} text-gray-400 transition-transform group-hover:text-gray-600`} 
                  size={18} 
                />
              </div>
              {showSpecialtiesDropdown && specialties.length > 0 && (
                <div className="space-y-3 mb-2 max-h-48 overflow-y-auto pr-2 animate-fadeIn">
                  {specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={specialty}
                        checked={selectedSpecialties.includes(specialty)}
                        onChange={() => handleSpecialtyChange(specialty)}
                        className="h-4 w-4 text-blue-600 rounded cursor-pointer"
                      />
                      <label htmlFor={specialty} className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                        {specialty}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Consultation mode */}
            <div>
              <div 
                className="flex justify-between items-center cursor-pointer mb-3 group"
                onClick={() => setShowConsultationDropdown(!showConsultationDropdown)}
              >
                <h3 className="text-base font-medium text-gray-700">Mode of consultation</h3>
                <ChevronDown 
                  className={`transform ${showConsultationDropdown ? "rotate-180" : ""} text-gray-400 transition-transform group-hover:text-gray-600`} 
                  size={18} 
                />
              </div>
              {showConsultationDropdown && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="video"
                      name="consultation"
                      checked={consultationMode === "Video Consult"}
                      onChange={() => handleConsultationModeChange("Video Consult")}
                      className="h-4 w-4 text-blue-600 cursor-pointer"
                    />
                    <label htmlFor="video" className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                      Video Consultation
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="clinic"
                      name="consultation"
                      checked={consultationMode === "In Clinic"}
                      onChange={() => handleConsultationModeChange("In Clinic")}
                      className="h-4 w-4 text-blue-600 cursor-pointer"
                    />
                    <label htmlFor="clinic" className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                      In-clinic Consultation
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="all"
                      name="consultation"
                      checked={consultationMode === ""}
                      onChange={() => handleConsultationModeChange("")}
                      className="h-4 w-4 text-blue-600 cursor-pointer"
                    />
                    <label htmlFor="all" className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                      All
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Doctors listing */}
        <div className="flex-1">
          {isLoading ? (
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center items-center space-x-2">
                <div className="spinner"></div>
                <p className="text-gray-500">Loading doctors...</p>
              </div>
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-gray-500">No doctors found matching your criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden doctor-card">
                  <div className="p-5 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <InitialsAvatar 
                        name={doctor.name}
                        size={80}
                        className="shadow-sm"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800 mb-1">
                        {doctor.name.startsWith('Dr.') ? doctor.name : `Dr. ${doctor.name}`}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {doctor.specialty && doctor.specialty.length > 0 ? doctor.specialty[0] : "General Physician"}
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        {doctor.qualification || "MBBS"}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {doctor.experience} yrs exp.
                      </p>
                      
                      <div className="flex items-center text-gray-600 mb-1 gap-2 text-sm">
                        <Building size={14} className="text-gray-500 flex-shrink-0" />
                        <span>{getClinicName(doctor.clinic)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-1 gap-2 text-sm">
                        <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                    
                    <div className="md:text-right flex flex-col items-end">
                      <div className="text-base font-medium text-green-600 mb-3">₹ {doctor.fees}</div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded book-button btn border-0">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Export the main component wrapped in Suspense
export default function DoctorListing() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin h-6 w-6 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            <p className="text-gray-500">Loading doctors...</p>
          </div>
        </div>
      </div>
    }>
      <DoctorListingWithSearchParams />
    </Suspense>
  )
}
