export default function ContactSection() {

  const contacts = [

    {
      name: "Rencho",
      email: "me@therencho.com",
      linkedin: "https://www.linkedin.com/in/therencho/",
    },

    {
      name: "Shaaref",
      email: "minhas.khushhal1@gmail.com",
      linkedin: "https://www.linkedin.com/in/shaaref-khushhal-minhas-aba875216/",
    },

    {
      name: "Umut",
      email: "umut@example.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (

    <section
    id="contact"
      className="
        w-full
        max-w-7xl
        mx-auto
        px-6
        py-24
      "
    >

      {/* Heading */}

      <div
        className="
          mb-12
          text-center
        "
      >

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            tracking-tight
            text-fg
          "
        >

          Contact

        </h2>

        <p
          className="
            text-fg-subtle
            mt-4
            text-lg
          "
        >

          Connect with the developers
          behind Rus.

        </p>

      </div>

      {/* Cards */}

      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >

        {contacts.map(
          (person, idx) => (

            <div

              key={idx}

              className="
                rounded-[28px]
                border
                border-border
                bg-surface
                p-8
                transition-all
                duration-300
                hover:bg-surface-hover
              "
            >

              {/* Name */}

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-fg
                  tracking-tight
                "
              >

                {person.name}

              </h3>

              {/* Email */}

              <div
                className="
                  mt-6
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-fg-subtle
                    mb-2
                  "
                >

                  Email

                </p>

                <a
                  href={`mailto:${person.email}`}
                  className="
                    text-fg-muted
                    hover:text-fg
                    transition-colors
                    duration-200
                    break-all
                  "
                >

                  {person.email}

                </a>

              </div>

              {/* LinkedIn */}

              <div
                className="
                  mt-6
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-fg-subtle
                    mb-2
                  "
                >

                  LinkedIn

                </p>

                <a
                  href={person.linkedin}
                  target="_blank"
                  className="
                    text-fg-muted
                    hover:text-fg
                    transition-colors
                    duration-200
                  "
                >

                  View Profile

                </a>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}
