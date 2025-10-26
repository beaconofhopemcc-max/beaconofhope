"use client";

import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const SERVICES = [
  "Psychiatric Evaluation",
  "Cognitive Behavioral Therapy (CBT)",
  "ADHD Assessment",
  "PTSD/Trauma Care",
  "Medication Management",
  "Family & Couples Therapy",
  "General Mental Health Support",
  "Medical Cannabis Consultation",
];

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    appointmentType: "",
    service: "",
    date: "",
    time: "",
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    reasonForAppointment: "",
    additionalNotes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showDobModal, setShowDobModal] = useState(false);
  const [savedData, setSavedData] = useState(null);

  // load saved
  useEffect(() => {
    const saved = localStorage.getItem("bookConsultation.v1");
    if (saved) {
      setSavedData(JSON.parse(saved));
      setShowResumeModal(true);
    }
  }, []);

  // autosave
  useEffect(() => {
    localStorage.setItem("bookConsultation.v1", JSON.stringify(formData));
  }, [formData]);

  const update = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleResume = () => {
    setFormData(savedData);
    setShowResumeModal(false);
  };

  const handleStartFresh = () => {
    localStorage.removeItem("bookConsultation.v1");
    setShowResumeModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      alert("Thank you! Your booking was received successfully.");
      localStorage.removeItem("bookConsultation.v1");
      setFormData({
        appointmentType: "",
        service: "",
        date: "",
        time: "",
        fullName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        reasonForAppointment: "",
        additionalNotes: "",
      });
    } catch (err) {
      alert("Unable to submit. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/* Resume modal */}
      {showResumeModal && (
        <Modal>
          <h2 className="text-2xl font-bold text-[#004AAD] mb-4">
            Continue Your Booking?
          </h2>
          <p className="text-gray-700 mb-8">
            We found a saved form. Continue or start fresh?
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleResume}
              className="bg-[#004AAD] hover:bg-[#00367d] text-white font-semibold px-6 py-3 rounded-full"
            >
              Continue
            </button>
            <button
              onClick={handleStartFresh}
              className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-6 py-3 rounded-full"
            >
              Start Fresh
            </button>
          </div>
        </Modal>
      )}

      {/* Date & time modal */}
      {showDateModal && (
        <Modal>
          <h2 className="text-2xl font-bold text-[#004AAD] mb-4">
            Select Date & Time
          </h2>
          <div className="space-y-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={update}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={update}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowDateModal(false)}
              className="bg-[#7D5F42] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
            >
              Save
            </button>
          </div>
        </Modal>
      )}

      {/* DOB modal */}
      {showDobModal && (
        <Modal>
          <h2 className="text-2xl font-bold text-[#004AAD] mb-4">
            Select Date of Birth
          </h2>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={update}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
          />
          <button
            onClick={() => setShowDobModal(false)}
            className="bg-[#7D5F42] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Save
          </button>
        </Modal>
      )}

      {/* hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          src="/book.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Schedule your session with{" "}
            <span className="text-white font-semibold">
              Beacon of Hope Psychiatry
            </span>{" "}
            and begin your healing journey today.
          </p>
          <a
            href="#booking-form"
            className="inline-block bg-white text-[#004AAD] font-bold py-3 px-8 rounded-full hover:scale-105 transition"
          >
            Start Booking
          </a>
        </div>
      </section>

      {/* form */}
      <main className="bg-white py-20 px-4 md:px-10 text-gray-800">
        <section
          id="booking-form"
          className="max-w-4xl mx-auto bg-gray-50 shadow-2xl rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-[#004AAD] text-center mb-10">
            Consultation Booking Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* appointment type */}
            <Select
              label="Appointment Type"
              name="appointmentType"
              value={formData.appointmentType}
              onChange={update}
              options={[
                "In-Person Consultation",
                "Telehealth / Online Session",
              ]}
            />

            {/* service */}
            <Select
              label="Service Needed"
              name="service"
              value={formData.service}
              onChange={update}
              options={SERVICES}
            />

            {/* date & time */}
            <div>
              <label className="block font-semibold mb-2 text-[#004AAD]">
                Preferred Date & Time <span className="text-red-600">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowDateModal(true)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-[#004AAD]"
              >
                {formData.date && formData.time ? (
                  `${formData.date} — ${formData.time}`
                ) : (
                  <span className="text-gray-500">
                    Click to select date & time
                  </span>
                )}
              </button>
            </div>

            {/* personal info */}
            <div>
              <h3 className="text-xl font-bold text-[#004AAD] mt-8 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowDobModal(true)}
                  className="border border-gray-300 rounded-lg px-4 py-3 text-left hover:border-[#004AAD]"
                >
                  {formData.dob ? (
                    formData.dob
                  ) : (
                    <span className="text-gray-500">
                      Click to select date of birth
                    </span>
                  )}
                </button>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={update}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
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
            </div>

            {/* notes */}
            <div>
              <label className="block font-semibold mb-2 text-[#004AAD]">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={update}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className={`px-10 py-4 text-lg font-bold rounded-full transition ${
                  submitting
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-[#7D5F42] text-white hover:bg-[#6a4f35] hover:scale-105"
                }`}
              >
                {submitting ? "Submitting..." : "Submit Booking"}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* --- helper components --- */

const Modal = ({ children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-[90%] p-8 text-center">
      {children}
    </div>
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block font-semibold mb-2 text-[#004AAD]">
      {label} <span className="text-red-600">*</span>
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg px-4 py-3"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
