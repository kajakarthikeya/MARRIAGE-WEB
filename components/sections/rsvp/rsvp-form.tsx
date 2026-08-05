'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/sections/rsvp/form-field';
import { AttendanceSelector } from '@/components/sections/rsvp/attendance-selector';
import { GuestCounter } from '@/components/sections/rsvp/guest-counter';
import { FloralCorner } from '@/components/ui/decorative-elements';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiSend, FiRotateCcw } from 'react-icons/fi';
import { RSVPPayload } from '@/lib/email-service';
import { RSVPFormErrors } from '@/hooks/useRSVPForm';

export interface RSVPFormProps {
  formData: RSVPPayload;
  errors: RSVPFormErrors;
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAttendanceChange: (status: 'yes' | 'no' | 'maybe') => void;
  onGuestsChange: (count: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

export function RSVPForm({
  formData,
  errors,
  isSubmitting,
  onChange,
  onAttendanceChange,
  onGuestsChange,
  onSubmit,
  onReset,
}: RSVPFormProps) {
  return (
    <Card
      variant="bordered"
      hoverEffect={false}
      className="w-full max-w-2xl mx-auto p-6 sm:p-10 bg-[#FAF7F2]/90 backdrop-blur-md border-2 border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(74,14,23,0.08)] relative overflow-hidden"
    >
      <FloralCorner position="top-left" className="top-3 left-3 text-[#D4AF37]/50" />
      <FloralCorner position="top-right" className="top-3 right-3 text-[#D4AF37]/50" />

      <form onSubmit={onSubmit} noValidate className="w-full">
        {/* Full Name */}
        <FormField
          id="fullName"
          name="fullName"
          label="Full Name *"
          value={formData.fullName}
          onChange={onChange}
          error={errors.fullName}
          icon={<FiUser className="w-4 h-4" />}
        />

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <FormField
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number *"
            value={formData.phone}
            onChange={onChange}
            error={errors.phone}
            icon={<FiPhone className="w-4 h-4" />}
          />

          <FormField
            id="email"
            name="email"
            type="email"
            label="Email Address (Optional)"
            value={formData.email}
            onChange={onChange}
            icon={<FiMail className="w-4 h-4" />}
          />
        </div>

        {/* Attendance Selector */}
        <AttendanceSelector
          value={formData.attendance}
          onChange={onAttendanceChange}
          error={errors.attendance}
        />

        {/* Guest Counter (only if attending yes/maybe) */}
        {formData.attendance !== 'no' && (
          <GuestCounter
            count={formData.guests}
            onChange={onGuestsChange}
          />
        )}

        {/* Personal Message */}
        <div className="relative w-full mb-6 rsvp-form-item">
          <div className="relative flex items-start">
            <div className="absolute left-4 top-3.5 text-[#D4AF37] pointer-events-none z-10">
              <FiMessageSquare className="w-4 h-4" />
            </div>

            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder=" "
              value={formData.message}
              onChange={onChange}
              className="w-full bg-white/70 border border-[#D4AF37]/40 rounded-xl py-3 pl-11 pr-4 text-sm text-[#3D2E24] focus:outline-none focus:border-[#4A0E17] focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-300 font-sans shadow-xs resize-none"
            />

            <label
              htmlFor="message"
              className={`absolute left-11 transition-all duration-200 pointer-events-none font-sans uppercase tracking-wider ${
                formData.message
                  ? '-top-2.5 bg-[#FAF7F2] px-2 text-[10px] text-[#4A0E17] font-semibold rounded'
                  : 'top-3.5 text-xs text-[#6E5D4F]'
              }`}
            >
              Personal Message (Optional)
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 rsvp-form-item">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            glow
            disabled={isSubmitting}
            className="w-full sm:w-auto font-sans tracking-[0.2em]"
          >
            <FiSend className="w-4 h-4 text-[#D4AF37]" />
            {isSubmitting ? 'Submitting...' : 'Confirm Attendance'}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onReset}
            disabled={isSubmitting}
            className="w-full sm:w-auto font-sans tracking-[0.2em]"
          >
            <FiRotateCcw className="w-4 h-4 text-[#4A0E17]" />
            Reset Form
          </Button>
        </div>
      </form>
    </Card>
  );
}
