"use client";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const CONDITIONS = [
  "Depression",
  "Bipolar Disorder",
  "Psychosis",
  "Anxiety",
  "PTSD",
  "OCD",
  "Eating Disorder",
  "ADHD",
  "Autism",
  "Addiction",
  "Personality Disorder",
];

export default function IntakeFormPage() {
  const [submitting, setSubmitting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    emergencyEmail: "",
    emergencyAddress: "",
    educationLevel: "",
    employmentLevel: "",
    occupation: "",
    primaryCarePhysician: "",
    primaryCareAddress: "",
    primaryCarePhone: "",
    previousConditions: [],
    hospitalized: "",
    hospitalizationDate: "",
    reasonForVisit: "",
    medicalHistory: "",
  });

  // === Load saved draft ===
  useEffect(() => {
    try {
      const saved = localStorage.getItem("patientIntake.v1");
      if (saved) {
        setSavedData(JSON.parse(saved));
        setShowResumeModal(true);
      }
    } catch (err) {
      console.warn("Error loading saved data:", err);
    }
  }, []);

  // === Auto-save on every change ===
  useEffect(() => {
    try {
      localStorage.setItem("patientIntake.v1", JSON.stringify(formData));
    } catch (err) {
      console.warn("Auto-save failed:", err);
    }
  }, [formData]);

  // === Resume or start fresh ===
  const handleResume = () => {
    setFormData(savedData);
    setShowResumeModal(false);
  };

  const handleStartFresh = () => {
    localStorage.removeItem("patientIntake.v1");
    setShowResumeModal(false);
  };

  // === Helpers ===
  const update = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCondition = (value) => {
    setFormData((prev) => {
      const has = prev.previousConditions.includes(value);
      return {
        ...prev,
        previousConditions: has
          ? prev.previousConditions.filter((x) => x !== value)
          : [...prev.previousConditions, value],
      };
    });
  };

  // === Submit ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to submit");

      alert("Thank you! Your patient intake form has been successfully submitted.");
      localStorage.removeItem("patientIntake.v1");
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        address: "",
        email: "",
        phone: "",
        emergencyName: "",
        emergencyRelationship: "",
        emergencyPhone: "",
        emergencyEmail: "",
        emergencyAddress: "",
        educationLevel: "",
        employmentLevel: "",
        occupation: "",
        primaryCarePhysician: "",
        primaryCareAddress: "",
        primaryCarePhone: "",
        previousConditions: [],
        hospitalized: "",
        hospitalizationDate: "",
        reasonForVisit: "",
        medicalHistory: "",
      });
    } catch (err) {
      alert("Submission failed: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/* === MODERN RESUME MODAL === */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-[90%] p-8 text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-[#004AAD] mb-4">
              Continue Your Saved Form?
            </h2>
            <p className="text-gray-700 mb-8">
              We found an unfinished patient intake form. Would you like to continue where
              you left off or start fresh?
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleResume}
                className="bg-[#004AAD] hover:bg-[#00367d] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Continue
              </button>
              <button
                onClick={handleStartFresh}
                className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Fresh
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="bg-white text-gray-800 font-sans antialiased min-h-screen pt-24 pb-28">
        <section className="max-w-5xl mx-auto px-4 md:px-10">
          {/* HEADER */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-4">
              Patient Intake Form
            </h1>
            <p className="text-lg text-gray-700">
              Your journey with{" "}
              <span className="font-semibold text-[#7D5F42]">
                Beacon of Hope Psychiatry
              </span>{" "}
              begins here. Please fill out this form carefully. Fields marked{" "}
              <span className="text-red-600">*</span> are required.
            </p>
          </header>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 shadow-2xl rounded-3xl p-6 md:p-10 space-y-12"
          >
            {/* PERSONAL */}
            <div>
              <h2 className="text-2xl font-bold text-[#004AAD] mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={update}
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Select Gender *</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other / Prefer not to say</option>
                </select>
              </div>
              <input
                type="text"
                name="address"
                placeholder="Home Address"
                value={formData.address}
                onChange={update}
                className="mt-6 w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-2xl font-bold text-[#004AAD] mb-6">
                Contact & Emergency Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <input
                  type="text"
                  name="emergencyName"
                  placeholder="Emergency Contact Name *"
                  value={formData.emergencyName}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  name="emergencyRelationship"
                  placeholder="Relationship *"
                  value={formData.emergencyRelationship}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <input
                  type="tel"
                  name="emergencyPhone"
                  placeholder="Emergency Phone *"
                  value={formData.emergencyPhone}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="email"
                  name="emergencyEmail"
                  placeholder="Emergency Email *"
                  value={formData.emergencyEmail}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 sm:col-span-2"
                />
              </div>
              <input
                type="text"
                name="emergencyAddress"
                placeholder="Emergency Contact Address"
                value={formData.emergencyAddress}
                onChange={update}
                className="mt-6 w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-2xl font-bold text-[#004AAD] mb-6">
                Education & Employment
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Highest Education Level *</option>
                  <option>No formal education</option>
                  <option>High School / GED</option>
                  <option>Some College</option>
                  <option>Associate's</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>Doctorate</option>
                  <option>Other</option>
                </select>
                <select
                  name="employmentLevel"
                  value={formData.employmentLevel}
                  onChange={update}
                  className="border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Employment Status</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Student</option>
                  <option>Retired</option>
                  <option>Disabled</option>
                  <option>Unemployed</option>
                </select>
              </div>
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={update}
                className="mt-6 w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* MEDICAL */}
            <div>
              <h2 className="text-2xl font-bold text-[#004AAD] mb-6">
                Medical & Psychiatric History
              </h2>
              <div className="space-y-6">
                <input
                  type="text"
                  name="primaryCarePhysician"
                  placeholder="Primary Care Physician *"
                  value={formData.primaryCarePhysician}
                  onChange={update}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  name="primaryCareAddress"
                  placeholder="Primary Care Physician Address"
                  value={formData.primaryCareAddress}
                  onChange={update}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="tel"
                  name="primaryCarePhone"
                  placeholder="Primary Care Physician Phone"
                  value={formData.primaryCarePhone}
                  onChange={update}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Psychiatric Conditions (select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {CONDITIONS.map((c) => (
                      <label key={c} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.previousConditions.includes(c)}
                          onChange={() => toggleCondition(c)}
                          className="h-4 w-4 text-[#004AAD] border-gray-300 rounded"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Ever psychiatrically hospitalized?
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hospitalized"
                        value="yes"
                        checked={formData.hospitalized === "yes"}
                        onChange={update}
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hospitalized"
                        value="no"
                        checked={formData.hospitalized === "no"}
                        onChange={update}
                      />
                      No
                    </label>
                  </div>
                </div>

                {formData.hospitalized === "yes" && (
                  <input
                    type="date"
                    name="hospitalizationDate"
                    value={formData.hospitalizationDate}
                    onChange={update}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  />
                )}

                <textarea
                  name="reasonForVisit"
                  placeholder="Reason for today's visit"
                  rows={4}
                  value={formData.reasonForVisit}
                  onChange={update}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />

                <textarea
                  name="medicalHistory"
                  placeholder="Medical History *"
                  rows={6}
                  required
                  value={formData.medicalHistory}
                  onChange={update}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* SUBMIT */}
            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className={`px-10 py-4 text-lg font-bold rounded-full transition ${
                  submitting
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[#7D5F42] text-white hover:bg-[#6a4f35] hover:scale-105"
                }`}
              >
                {submitting ? "Submitting..." : "Submit Intake Form"}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
