/**
 * Bespoke editorial vector illustrations styled in the Natural Porch Glow palette:
 * Deep Oak, Earthy Wood, Sunlit Grass, Golden Fields, Afternoon Sky, and Porch Railing.
 */

const FONT_SERIF = "var(--font-fraunces), Georgia, serif";
const FONT_SANS = "var(--font-public-sans), ui-sans-serif, system-ui, sans-serif";

export function DiagramOnePage() {
  return (
    <svg
      viewBox="0 0 360 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <rect width="360" height="184" fill="#ece0ce" />
      <circle cx="296" cy="36" r="76" fill="#e2d3bc" opacity="0.6" />
      <circle cx="48" cy="164" r="56" fill="#7990aa" opacity="0.11" />

      {/* Desktop Editorial Canvas (left margin 20) */}
      <rect
        x="20"
        y="22"
        width="196"
        height="140"
        rx="8"
        fill="#fcf9f3"
        stroke="#cbb99d"
        strokeWidth="1.2"
      />
      <circle cx="34" cy="33.5" r="2.5" fill="#7e843a" />
      <text
        x="43"
        y="36"
        fill="#6b5542"
        fontSize="6.8"
        fontFamily={FONT_SANS}
        fontWeight="500"
        letterSpacing="0.4"
      >
        yourshop.com
      </text>
      <line x1="20" y1="44" x2="216" y2="44" stroke="#dfd1ba" strokeWidth="1" />

      {/* Editorial Story & Hours inside Desktop Card */}
      <text
        x="34"
        y="66"
        fill="#555b21"
        fontSize="6.5"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="0.9"
      >
        GLENNVILLE, GA · TATTNALL COUNTY
      </text>
      <text
        x="34"
        y="83"
        fill="#2f3e2b"
        fontSize="13"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        Made by hand,
      </text>
      <text
        x="34"
        y="99"
        fill="#555b21"
        fontSize="13"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        open til six.
      </text>
      <rect x="34" y="109" width="112" height="4" rx="2" fill="#cbb99d" />
      <rect x="34" y="117" width="84" height="4" rx="2" fill="#dfd1ba" />

      {/* Bottom Hours Strip */}
      <rect x="34" y="131" width="168" height="20" rx="5" fill="#f6efe3" stroke="#dfd1ba" />
      <circle cx="44" cy="141" r="3" fill="#7e843a" />
      <text x="52" y="143.5" fill="#58412f" fontSize="7.5" fontFamily={FONT_SANS} fontWeight="500">
        Tue – Sat · 8:00 am – 6:00 pm
      </text>

      {/* Overlapping Handheld Phone Card (right margin 20) */}
      <rect
        x="230"
        y="16"
        width="110"
        height="152"
        rx="14"
        fill="#fcf9f3"
        stroke="#2f3e2b"
        strokeWidth="1.4"
      />
      <rect x="269" y="24" width="32" height="3" rx="1.5" fill="#dfd1ba" />
      <rect x="242" y="35" width="86" height="45" rx="6" fill="#ece0ce" />
      <text
        x="252"
        y="54"
        fill="#2f3e2b"
        fontSize="9.5"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        Who you are
      </text>
      <text
        x="252"
        y="67"
        fill="#58412f"
        fontSize="7.5"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        &amp; where to find you
      </text>

      <rect x="242" y="87" width="86" height="36" rx="5" fill="#f6efe3" stroke="#dfd1ba" />
      <text x="250" y="98.5" fill="#2f3e2b" fontSize="6.8" fontFamily={FONT_SANS} fontWeight="600">
        Open Today · Until 6pm
      </text>
      <text x="250" y="109" fill="#58412f" fontSize="6.4" fontFamily={FONT_SANS}>
        Glennville, GA
      </text>
      <text x="250" y="118" fill="#6b5542" fontSize="6.1" fontFamily={FONT_SANS}>
        Tattnall County
      </text>

      <rect x="242" y="130" width="86" height="26" rx="6" fill="#2f3e2b" />
      <text
        x="285"
        y="145.5"
        textAnchor="middle"
        fill="#f6efe3"
        fontSize="8"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="0.4"
      >
        Tap to Call →
      </text>
    </svg>
  );
}

export function DiagramOrderLedger() {
  return (
    <svg
      viewBox="0 0 360 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <rect width="360" height="184" fill="#ece0ce" />
      <circle cx="72" cy="148" r="70" fill="#e2d3bc" opacity="0.6" />
      <circle cx="318" cy="34" r="54" fill="#7990aa" opacity="0.1" />

      {/* Left: Customer Order Card (margin 18) */}
      <rect
        x="18"
        y="22"
        width="156"
        height="140"
        rx="10"
        fill="#fcf9f3"
        stroke="#cbb99d"
        strokeWidth="1.2"
      />
      <text
        x="32"
        y="43"
        fill="#555b21"
        fontSize="7"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.2"
      >
        CUSTOMER ORDER
      </text>
      <line x1="32" y1="51" x2="160" y2="51" stroke="#dfd1ba" strokeWidth="1" />

      <text x="32" y="68" fill="#2f3e2b" fontSize="8.5" fontFamily={FONT_SERIF}>
        Whipped Tallow Balm
      </text>
      <text
        x="160"
        y="68"
        textAnchor="end"
        fill="#2f3e2b"
        fontSize="8"
        fontFamily={FONT_SANS}
        fontWeight="600"
      >
        × 1
      </text>
      <line x1="32" y1="76" x2="160" y2="76" stroke="#ece0ce" strokeWidth="1" />

      <text x="32" y="92" fill="#2f3e2b" fontSize="8.5" fontFamily={FONT_SERIF}>
        Elderberry Syrup (16oz)
      </text>
      <text
        x="160"
        y="92"
        textAnchor="end"
        fill="#2f3e2b"
        fontSize="8"
        fontFamily={FONT_SANS}
        fontWeight="600"
      >
        × 1
      </text>
      <line x1="32" y1="100" x2="160" y2="100" stroke="#ece0ce" strokeWidth="1" />

      <text x="32" y="115" fill="#6b5542" fontSize="7.5" fontFamily={FONT_SERIF} fontStyle="italic">
        Pickup: Friday at market
      </text>

      <rect x="32" y="126" width="128" height="24" rx="6" fill="#2f3e2b" />
      <text
        x="96"
        y="141"
        textAnchor="middle"
        fill="#f6efe3"
        fontSize="8"
        fontFamily={FONT_SANS}
        fontWeight="600"
      >
        Send Order →
      </text>

      {/* Symmetric Connector */}
      <path
        d="M174 92 C 190 92, 194 92, 210 92"
        stroke="#7e843a"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <circle cx="192" cy="92" r="3.5" fill="#7e843a" />

      {/* Right: Owner Inbox Notification Card (margin 18) */}
      <rect
        x="210"
        y="30"
        width="132"
        height="124"
        rx="10"
        fill="#fcf9f3"
        stroke="#2f3e2b"
        strokeWidth="1.3"
      />
      <rect x="222" y="42" width="108" height="22" rx="5" fill="#f6efe3" stroke="#dfd1ba" />
      <circle cx="232" cy="53" r="3.5" fill="#caa06b" />
      <text x="241" y="55.5" fill="#2f3e2b" fontSize="7.5" fontFamily={FONT_SANS} fontWeight="600">
        New Order in Inbox
      </text>

      <text x="224" y="82" fill="#2f3e2b" fontSize="9" fontFamily={FONT_SERIF} fontWeight="600">
        Local Pickup · #104
      </text>
      <text x="224" y="95" fill="#58412f" fontSize="7.5" fontFamily={FONT_SANS}>
        Glennville, GA · 2 items
      </text>

      <rect x="222" y="108" width="108" height="32" rx="6" fill="#ece0ce" />
      <text x="232" y="121.5" fill="#58412f" fontSize="7" fontFamily={FONT_SANS}>
        Order Total
      </text>
      <text x="232" y="133.5" fill="#2f3e2b" fontSize="8.5" fontFamily={FONT_SANS} fontWeight="700">
        2 items · No fees
      </text>
    </svg>
  );
}

export function DiagramSelfEditable() {
  return (
    <svg
      viewBox="0 0 360 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <rect width="360" height="184" fill="#ece0ce" />
      <circle cx="180" cy="24" r="68" fill="#e2d3bc" opacity="0.55" />

      {/* Main Studio Editor Card (margin 20) */}
      <rect
        x="20"
        y="22"
        width="320"
        height="140"
        rx="10"
        fill="#fcf9f3"
        stroke="#cbb99d"
        strokeWidth="1.2"
      />
      <line x1="190" y1="22" x2="190" y2="162" stroke="#dfd1ba" strokeWidth="1" />

      {/* Left Pane: 34..176 (14px margin inside 20..190) */}
      <text
        x="34"
        y="44"
        fill="#555b21"
        fontSize="7"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.2"
      >
        YOUR EDIT PANEL
      </text>

      <text x="34" y="62" fill="#58412f" fontSize="7.5" fontFamily={FONT_SANS}>
        Shop Hours
      </text>
      <rect x="34" y="67" width="142" height="22" rx="5" fill="#f6efe3" stroke="#cbb99d" />
      <text x="42" y="81" fill="#2f3e2b" fontSize="8" fontFamily={FONT_SANS} fontWeight="500">
        Tue–Sat, 8am – 5:30pm
      </text>

      <text x="34" y="105" fill="#58412f" fontSize="7.5" fontFamily={FONT_SANS}>
        Batch Price &amp; Status
      </text>
      <rect x="34" y="110" width="66" height="22" rx="5" fill="#f6efe3" stroke="#7e843a" strokeWidth="1.2" />
      <text x="44" y="124" fill="#555b21" fontSize="8.5" fontFamily={FONT_SANS} fontWeight="700">
        Small batch
      </text>

      <rect x="108" y="110" width="68" height="22" rx="6" fill="#2f3e2b" />
      <circle cx="119" cy="121" r="4" fill="#caa06b" />
      <text x="129" y="123.5" fill="#f6efe3" fontSize="7.5" fontFamily={FONT_SANS} fontWeight="600">
        In Stock
      </text>

      <text x="34" y="148" fill="#6b5542" fontSize="7.5" fontFamily={FONT_SERIF} fontStyle="italic">
        Saves instantly from your phone
      </text>

      {/* Right Pane: 204..326 (14px margin inside 190..340) */}
      <text
        x="204"
        y="44"
        fill="#58412f"
        fontSize="7"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.2"
      >
        LIVE ON YOUR SITE
      </text>

      <rect
        x="204"
        y="54"
        width="122"
        height="94"
        rx="8"
        fill="#f6efe3"
        stroke="#dfd1ba"
        strokeWidth="1"
      />
      <text
        x="214"
        y="76"
        fill="#2f3e2b"
        fontSize="9.5"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        Whipped Tallow Balm
      </text>
      <text
        x="214"
        y="91"
        fill="#6b5542"
        fontSize="7.2"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        4 oz glass jar · Small batch
      </text>
      <line x1="214" y1="101" x2="316" y2="101" stroke="#dfd1ba" />
      <text x="214" y="118" fill="#2f3e2b" fontSize="9.5" fontFamily={FONT_SANS} fontWeight="700">
        Fresh batch
      </text>
      <rect x="270" y="107" width="46" height="16" rx="4" fill="#e8eef3" />
      <text
        x="293"
        y="117.5"
        textAnchor="middle"
        fill="#4e657e"
        fontSize="6.5"
        fontFamily={FONT_SANS}
        fontWeight="600"
      >
        Available
      </text>
      <text x="214" y="136" fill="#58412f" fontSize="7" fontFamily={FONT_SANS}>
        Open Tue–Sat · 8a–5:30p
      </text>
    </svg>
  );
}

/**
 * Serene study bookplate & interface illustration for Theos Logos
 * (Biblical Greek & Hebrew Lexicon & Study Web Application).
 */
export function TheosLogosPlate() {
  return (
    <svg
      viewBox="0 0 1440 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Theos Logos study environment showing Greek and Hebrew interlinear scripture and Strong's lexicon reader"
      className="aspect-[3/2] w-full object-cover"
    >
      {/* Sunlit Parchment Backdrop with Gentle Sky & Field Glow */}
      <rect width="1440" height="960" fill="#ece0ce" />
      <circle cx="1220" cy="180" r="340" fill="#7990aa" opacity="0.14" />
      <circle cx="220" cy="820" r="280" fill="#e2d3bc" opacity="0.6" />

      {/* Elevated Application Window (56..1384, 52..908) */}
      <rect
        x="56"
        y="52"
        width="1328"
        height="856"
        rx="20"
        fill="#fcf9f3"
        stroke="#cbb99d"
        strokeWidth="2"
      />

      {/* Top Editorial Navigation Bar */}
      <path
        d="M76 52 H1364 Q1384 52 1384 72 V130 H56 V72 Q56 52 76 52 Z"
        fill="#f6efe3"
      />
      <rect
        x="56"
        y="52"
        width="1328"
        height="856"
        rx="20"
        stroke="#cbb99d"
        strokeWidth="2"
      />
      <line x1="56" y1="130" x2="1384" y2="130" stroke="#dfd1ba" strokeWidth="1.5" />

      {/* Architectural Bookplate Mark + Title */}
      <rect x="80" y="75" width="3.5" height="32" rx="1.75" fill="#7e843a" />
      <text
        x="96"
        y="99"
        fill="#2f3e2b"
        fontSize="26"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        Theos Logos
      </text>
      <line x1="266" y1="77" x2="266" y2="105" stroke="#dfd1ba" strokeWidth="1.5" />
      <text
        x="284"
        y="97"
        fill="#6b5542"
        fontSize="16"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        Interlinear Scripture &amp; Classical Lexicon
      </text>
      <text
        x="1126"
        y="96"
        textAnchor="end"
        fill="#6b5542"
        fontSize="13"
        fontFamily={FONT_SANS}
        fontWeight="500"
        letterSpacing="0.8"
      >
        theoslogos.vercel.app
      </text>

      <rect x="1152" y="71" width="188" height="40" rx="8" fill="#e8eef3" />
      <text
        x="1246"
        y="96"
        textAnchor="middle"
        fill="#4e657e"
        fontSize="13.5"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.2"
      >
        JOHN 1:1 · GEN 1:1
      </text>

      {/* Main Split Reader Divider */}
      <line x1="856" y1="130" x2="856" y2="908" stroke="#dfd1ba" strokeWidth="1.5" />

      {/* Left Pane (x=104..808) */}
      <text
        x="104"
        y="186"
        fill="#555b21"
        fontSize="13"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="2.2"
      >
        GOSPEL ACCORDING TO JOHN · CHAPTER I
      </text>

      {/* Five Interlinear Word Cards spanning exact width 104..808 */}
      {[
        { gr: "Ἐν", tr: "En", en: "In [the]", strong: "G1722", x: 104 },
        { gr: "ἀρχῇ", tr: "archē", en: "beginning", strong: "G746", x: 244 },
        { gr: "ἦν", tr: "ēn", en: "was", strong: "G2258", x: 384 },
        { gr: "ὁ", tr: "ho", en: "the", strong: "G3588", x: 524 },
        { gr: "Λόγος", tr: "Logos", en: "Word", strong: "G3056", x: 664, active: true },
      ].map((w) => (
        <g key={w.strong}>
          <rect
            x={w.x}
            y="218"
            width={w.active ? "144" : "122"}
            height="148"
            rx="12"
            fill={w.active ? "#f6efe3" : "#fcf9f3"}
            stroke={w.active ? "#7e843a" : "#dfd1ba"}
            strokeWidth={w.active ? "2.5" : "1.5"}
          />
          <text
            x={w.x + 18}
            y="248"
            fill="#555b21"
            fontSize="12"
            fontFamily={FONT_SANS}
            fontWeight="600"
            letterSpacing="1.2"
          >
            {w.strong}
          </text>
          <text
            x={w.x + 18}
            y="292"
            fill="#2f3e2b"
            fontSize="28"
            fontFamily={FONT_SERIF}
            fontWeight="600"
          >
            {w.gr}
          </text>
          <text
            x={w.x + 18}
            y="320"
            fill="#6b5542"
            fontSize="15"
            fontFamily={FONT_SERIF}
            fontStyle="italic"
          >
            {w.tr}
          </text>
          <text
            x={w.x + 18}
            y="346"
            fill="#2f3e2b"
            fontSize="14"
            fontFamily={FONT_SANS}
            fontWeight="500"
          >
            {w.en}
          </text>
        </g>
      ))}

      {/* Literary Translation Block */}
      <text
        x="104"
        y="436"
        fill="#2f3e2b"
        fontSize="30"
        fontFamily={FONT_SERIF}
      >
        “In the beginning was the Word, and the Word was
      </text>
      <text
        x="104"
        y="482"
        fill="#2f3e2b"
        fontSize="30"
        fontFamily={FONT_SERIF}
      >
        with God, and the Word was God.”
      </text>

      {/* Old Testament Hebrew Parallel Card (x=104..808) */}
      <rect
        x="104"
        y="538"
        width="704"
        height="310"
        rx="14"
        fill="#f6efe3"
        stroke="#dfd1ba"
        strokeWidth="1.5"
      />
      <text
        x="136"
        y="584"
        fill="#555b21"
        fontSize="13"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="2"
      >
        HEBREW PARALLEL · GENESIS 1:1
      </text>
      <text
        x="136"
        y="642"
        fill="#2f3e2b"
        fontSize="36"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        בְּרֵאשִׁית (rēʾšîṯ) · H7225
      </text>
      <text
        x="136"
        y="694"
        fill="#58412f"
        fontSize="20"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        “Beginning, firstfruits, chief part — echoed in the Septuagint’s
      </text>
      <text
        x="136"
        y="726"
        fill="#58412f"
        fontSize="20"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        Ἐν ἀρχῇ and fulfilled in the Johannine prologue.”
      </text>
      <line x1="136" y1="764" x2="776" y2="764" stroke="#dfd1ba" />
      <text
        x="136"
        y="802"
        fill="#6b5542"
        fontSize="14"
        fontFamily={FONT_SANS}
        fontWeight="500"
      >
        Built for quiet seminary study &amp; original-language exegesis
      </text>

      {/* Right Pane (x=900..1340) */}
      <rect x="900" y="170" width="440" height="678" rx="14" fill="#f6efe3" stroke="#dfd1ba" strokeWidth="1.5" />
      <rect x="936" y="204" width="144" height="32" rx="8" fill="#e8eef3" />
      <text
        x="1008"
        y="224.5"
        textAnchor="middle"
        fill="#4e657e"
        fontSize="12"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.5"
      >
        STRONG’S G3056
      </text>

      <text
        x="936"
        y="296"
        fill="#2f3e2b"
        fontSize="58"
        fontFamily={FONT_SERIF}
        fontWeight="600"
      >
        λόγος, ου, ὁ
      </text>
      <text
        x="936"
        y="338"
        fill="#6b5542"
        fontSize="21"
        fontFamily={FONT_SERIF}
        fontStyle="italic"
      >
        logos · Nominative Singular Masculine
      </text>

      <line x1="936" y1="372" x2="1304" y2="372" stroke="#dfd1ba" strokeWidth="1.5" />

      <text
        x="936"
        y="412"
        fill="#555b21"
        fontSize="12"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="2"
      >
        SEMANTIC RANGE
      </text>
      <text x="936" y="454" fill="#2f3e2b" fontSize="19.5" fontFamily={FONT_SERIF}>
        I. A word, speech, divine utterance or decree.
      </text>
      <text x="936" y="494" fill="#2f3e2b" fontSize="19.5" fontFamily={FONT_SERIF}>
        II. Account, reckoning, reason, living wisdom.
      </text>
      <text x="936" y="534" fill="#2f3e2b" fontSize="19.5" fontFamily={FONT_SERIF}>
        III. The Personal Word — Christ incarnate.
      </text>

      <rect x="936" y="584" width="368" height="224" rx="12" fill="#fcf9f3" stroke="#dfd1ba" />
      <text
        x="964"
        y="624"
        fill="#58412f"
        fontSize="13"
        fontFamily={FONT_SANS}
        fontWeight="600"
        letterSpacing="1.5"
      >
        NEW TESTAMENT OCCURRENCES (330)
      </text>

      <text x="964" y="668" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SERIF}>
        Gospel of John
      </text>
      <line x1="1102" y1="664" x2="1240" y2="664" stroke="#cbb99d" strokeWidth="1.5" strokeDasharray="2 6" />
      <text x="1276" y="668" textAnchor="end" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SANS} fontWeight="600">
        40
      </text>

      <text x="964" y="706" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SERIF}>
        Acts of the Apostles
      </text>
      <line x1="1142" y1="702" x2="1240" y2="702" stroke="#cbb99d" strokeWidth="1.5" strokeDasharray="2 6" />
      <text x="1276" y="706" textAnchor="end" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SANS} fontWeight="600">
        65
      </text>

      <text x="964" y="744" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SERIF}>
        Pauline Epistles
      </text>
      <line x1="1116" y1="740" x2="1240" y2="740" stroke="#cbb99d" strokeWidth="1.5" strokeDasharray="2 6" />
      <text x="1276" y="744" textAnchor="end" fill="#2f3e2b" fontSize="18" fontFamily={FONT_SANS} fontWeight="600">
        81
      </text>

      <text x="964" y="782" fill="#555b21" fontSize="14" fontFamily={FONT_SERIF} fontStyle="italic">
        Personal software by Gerardo Castaneda
      </text>
    </svg>
  );
}
