"use client";

import {
  IconFileText,
  IconMicrophone,
  IconPlayerRecordFilled,
} from "@tabler/icons-react";
import { WAITLIST_URL } from "@/lib/config";

/**
 * Landing version of the meeting workspace. This is presentational only — it
 * shows the real app's input UI but every interaction sends the visitor to the
 * product app to sign in / sign up. No backend calls, no state.
 */
export default function MeetingWorkspace() {
  function goToApp() {
    window.location.href = WAITLIST_URL;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div
        className="
          bg-surface
          border border-border
          rounded-[32px]
          p-8 md:p-10
          backdrop-blur-xl shadow-2xl
        "
      >
        {/* Heading */}
        <div className="mb-8">
          <button
            onClick={goToApp}
            className="
              inline-flex items-center
              bg-accent text-accent-foreground
              hover:bg-accent-hover
              text-sm font-medium
              px-3 py-1 rounded-full
              mb-4
              transition-colors
            "
          >
            Sign in / sign up to use
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-fg tracking-tight">
            Analyze Meeting
          </h2>
          <p className="text-fg-muted mt-3 text-base md:text-lg">
            Paste a transcript, upload a file, or record live.
          </p>
        </div>

        {/* Buttons — 3 across (all route to the app) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={goToApp}
            className="
              flex items-center justify-center gap-3
              bg-surface-input hover:bg-surface-hover
              border border-border
              rounded-2xl px-4 py-4
              text-fg-muted
              transition-all duration-200
            "
          >
            <IconFileText size={20} />
            <span className="text-sm font-medium">Upload Transcript</span>
          </button>

          <button
            onClick={goToApp}
            className="
              flex items-center justify-center gap-3
              bg-surface-input hover:bg-surface-hover
              border border-border
              rounded-2xl px-4 py-4
              text-fg-muted
              transition-all duration-200
            "
          >
            <IconMicrophone size={20} />
            <span className="text-sm font-medium">Upload Audio</span>
          </button>

          <button
            onClick={goToApp}
            className="
              flex items-center justify-center gap-3
              bg-surface-input hover:bg-surface-hover
              border border-border
              rounded-2xl px-4 py-4
              text-fg-muted
              transition-all duration-200
            "
          >
            <IconPlayerRecordFilled size={20} />
            <span className="text-sm font-medium">Record Meeting</span>
          </button>
        </div>

        {/* Transcript textarea — read-only, click sends to the app */}
        <textarea
          readOnly
          onClick={goToApp}
          onFocus={goToApp}
          placeholder="Sign in / sign up to use"
          className="
            w-full min-h-[340px]
            bg-surface-input
            border border-border
            rounded-[28px] p-6
            text-fg placeholder:text-fg-subtle
            outline-none resize-none cursor-pointer
            focus:border-accent/50
            transition-all duration-200
            text-sm md:text-base leading-relaxed
          "
        />

        {/* Bottom row */}
        <div
          className="
            mt-8
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between gap-6
          "
        >
          <p className="text-sm text-fg-subtle max-w-xl leading-relaxed">
            Rus extracts tasks, risks, execution gaps, and communication
            contexts from business meetings.
          </p>

          <button
            onClick={goToApp}
            className="
              bg-accent hover:bg-accent-hover
              text-accent-foreground font-semibold
              px-8 py-4 rounded-2xl
              transition-all duration-200
              shadow-lg
            "
          >
            Analyze Meeting
          </button>
        </div>
      </div>
    </section>
  );
}
