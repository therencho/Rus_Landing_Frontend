export default function footer() {

  return (

    <footer
      id="about"
      className="
        w-full
        border-t
        border-border
        bg-background
        mt-32
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
        "
      >

        {/* Brand */}

        <div
          className="
            flex
            flex-col
            items-center
            md:items-start
          "
        >

          <a
            href="/"
            className="
              text-2xl
              font-bold
              tracking-tight
              text-fg
            "
          >

            Rus

          </a>

          <p
            className="
              text-sm
              text-fg-subtle
              mt-2
            "
          >

            AI Meeting Intelligence Platform

          </p>

        </div>

        {/* Developers */}

        <div
          className="
            text-center
          "
        >

          <p
            className="
              text-sm
              text-fg-muted
            "
          >

            Built by

          </p>

          <p
            className="
              text-fg
              font-medium
              mt-1
            "
          >

            Rencho • Shaaref • Özgur

          </p>

        </div>

        {/* University */}

        <div
          className="
            text-center
            md:text-right
          "
        >

          <p
            className="
              text-sm
              text-fg-muted
            "
          >

            University of Bayreuth

          </p>

          <p
            className="
              text-sm
              text-fg-subtle
              mt-1
            "
          >

            DSAI Students

          </p>

        </div>

      </div>

    </footer>
  );
}
