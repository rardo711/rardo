/**
 * Custom architectural vector illustrations for each service card and software build.
 * Every diagram is bespoke and tailored to its specific offering — zero generic stock icons.
 */

export function DiagramOnePage() {
  return (
    <svg
      viewBox="0 0 360 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full border border-line bg-paper"
    >
      {/* Background architectural grid ticks */}
      <line x1="0" y1="28" x2="360" y2="28" stroke="#dfd2b8" strokeWidth="1" />
      <line x1="218" y1="28" x2="218" y2="176" stroke="#dfd2b8" strokeWidth="1" strokeDasharray="3 3" />

      {/* Top browser/frame bar */}
      <rect x="10" y="9" width="6" height="6" fill="#221a13" />
      <rect x="20" y="9" width="6" height="6" stroke="#221a13" strokeWidth="1" />
      <text x="34" y="15" fill="#594c3d" fontSize="8" fontFamily="sans-serif" letterSpacing="1.2">
        FIG 01 · MOBILE-FIRST STOREFRONT
      </text>
      <text x="310" y="15" fill="#a84d1d" fontSize="8" fontFamily="sans-serif" fontWeight="600">
        99/100
      </text>

      {/* Left: Desktop / Ledger View */}
      <rect x="16" y="40" width="188" height="122" fill="#fffdf7" stroke="#221a13" strokeWidth="1.2" />
      <line x1="16" y1="58" x2="204" y2="58" stroke="#dfd2b8" strokeWidth="1" />
      <rect x="24" y="46" width="42" height="5" fill="#221a13" />
      <rect x="158" y="45" width="38" height="7" fill="#a84d1d" />

      {/* Headline & subcopy blocks */}
      <rect x="24" y="68" width="116" height="8" fill="#221a13" />
      <rect x="24" y="80" width="88" height="8" fill="#a84d1d" />
      <rect x="24" y="95" width="132" height="4" fill="#756755" />
      <rect x="24" y="103" width="108" height="4" fill="#756755" />

      {/* Structured Hours & Location Footer inside specimen */}
      <line x1="16" y1="122" x2="204" y2="122" stroke="#dfd2b8" strokeWidth="1" />
      <text x="24" y="135" fill="#594c3d" fontSize="7" fontFamily="sans-serif" letterSpacing="0.8">
        HOURS: TUE–SAT · 8AM–6PM
      </text>
      <text x="24" y="149" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        GLENNVILLE, GA · (912) CALL DIRECT
      </text>
      <rect x="156" y="130" width="40" height="22" fill="#221a13" />
      <path d="M170 141H182M182 141L178 137M182 141L178 145" stroke="#faf6ec" strokeWidth="1.2" />

      {/* Right: Handheld Phone Viewport (where local customers find you) */}
      <rect x="234" y="38" width="110" height="126" rx="2" fill="#fffdf7" stroke="#221a13" strokeWidth="1.5" />
      <line x1="234" y1="52" x2="344" y2="52" stroke="#dfd2b8" strokeWidth="1" />
      <rect x="276" y="44" width="26" height="2" fill="#221a13" />
      <rect x="244" y="60" width="72" height="6" fill="#221a13" />
      <rect x="244" y="70" width="54" height="6" fill="#a84d1d" />
      <rect x="244" y="84" width="90" height="32" fill="#f2ead9" stroke="#dfd2b8" strokeWidth="1" />
      <text x="251" y="98" fill="#221a13" fontSize="7" fontFamily="sans-serif" fontWeight="600">
        OPEN TODAY · UNTIL 6PM
      </text>
      <text x="251" y="109" fill="#594c3d" fontSize="6.5" fontFamily="sans-serif">
        124 S Veterans Blvd
      </text>
      {/* Prominent tap-to-call action bar */}
      <rect x="244" y="124" width="90" height="28" fill="#a84d1d" />
      <text x="255" y="141" fill="#faf6ec" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">
        TAP TO CALL →
      </text>
    </svg>
  );
}

export function DiagramOrderLedger() {
  return (
    <svg
      viewBox="0 0 360 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full border border-line bg-paper"
    >
      <line x1="0" y1="28" x2="360" y2="28" stroke="#dfd2b8" strokeWidth="1" />
      <rect x="10" y="9" width="6" height="6" fill="#a84d1d" />
      <text x="24" y="15" fill="#594c3d" fontSize="8" fontFamily="sans-serif" letterSpacing="1.2">
        FIG 02 · DIRECT ORDER &amp; INBOX LEDGER
      </text>
      <text x="292" y="15" fill="#221a13" fontSize="8" fontFamily="sans-serif" fontWeight="600">
        $0/MO FEE
      </text>

      {/* Left: Customer Order Slip */}
      <rect x="16" y="42" width="152" height="120" fill="#fffdf7" stroke="#221a13" strokeWidth="1.2" />
      <rect x="16" y="42" width="152" height="18" fill="#f2ead9" />
      <line x1="16" y1="60" x2="168" y2="60" stroke="#221a13" strokeWidth="1" />
      <text x="24" y="54" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">
        ORDER SLIP #042
      </text>

      {/* Line items */}
      <text x="24" y="75" fill="#221a13" fontSize="7.5" fontFamily="sans-serif">
        01 · Whipped Tallow Balm
      </text>
      <text x="136" y="75" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        $24
      </text>
      <line x1="24" y1="82" x2="160" y2="82" stroke="#dfd2b8" strokeWidth="1" />

      <text x="24" y="95" fill="#221a13" fontSize="7.5" fontFamily="sans-serif">
        02 · Elderberry Syrup (16oz)
      </text>
      <text x="136" y="95" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        $28
      </text>
      <line x1="24" y1="102" x2="160" y2="102" stroke="#dfd2b8" strokeWidth="1" />

      <text x="24" y="115" fill="#594c3d" fontSize="7" fontFamily="sans-serif">
        PICKUP: FRIDAY · 4:00 PM
      </text>

      <rect x="24" y="126" width="136" height="24" fill="#221a13" />
      <text x="48" y="141" fill="#faf6ec" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">
        SEND ORDER DIRECT
      </text>

      {/* Routing connector */}
      <line x1="168" y1="102" x2="206" y2="102" stroke="#a84d1d" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="206,98 214,102 206,106" fill="#a84d1d" />

      {/* Right: Owner Inbox Dispatch */}
      <rect x="216" y="48" width="128" height="108" fill="#fffdf7" stroke="#221a13" strokeWidth="1.2" />
      <rect x="216" y="48" width="128" height="20" fill="#221a13" />
      <text x="225" y="61" fill="#faf6ec" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">
        OWNER INBOX · INSTANT
      </text>
      <text x="225" y="83" fill="#a84d1d" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        ● NEW CUSTOMER ORDER
      </text>
      <text x="225" y="97" fill="#221a13" fontSize="7.5" fontFamily="sans-serif">
        From: Sarah Jenkins
      </text>
      <text x="225" y="109" fill="#594c3d" fontSize="7" fontFamily="sans-serif">
        Tel: (912) 555-0194
      </text>
      <rect x="225" y="118" width="110" height="26" fill="#f2ead9" stroke="#dfd2b8" strokeWidth="1" />
      <text x="232" y="134" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        Total: $52.00 · 0% Cut
      </text>
    </svg>
  );
}

export function DiagramSelfEditable() {
  return (
    <svg
      viewBox="0 0 360 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full border border-line bg-paper"
    >
      <line x1="0" y1="28" x2="360" y2="28" stroke="#dfd2b8" strokeWidth="1" />
      <rect x="10" y="9" width="6" height="6" stroke="#221a13" strokeWidth="1.2" />
      <text x="24" y="15" fill="#594c3d" fontSize="8" fontFamily="sans-serif" letterSpacing="1.2">
        FIG 03 · PLAIN-LANGUAGE OWNER STUDIO
      </text>
      <text x="282" y="15" fill="#a84d1d" fontSize="8" fontFamily="sans-serif" fontWeight="600">
        NO DEV NEEDED
      </text>

      {/* Editor Panel Frame */}
      <rect x="16" y="40" width="328" height="122" fill="#fffdf7" stroke="#221a13" strokeWidth="1.2" />
      <line x1="186" y1="40" x2="186" y2="162" stroke="#dfd2b8" strokeWidth="1" />

      {/* Left: Plain-language controls */}
      <text x="26" y="56" fill="#594c3d" fontSize="7" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">
        EDIT STOREFRONT FIELDS
      </text>

      {/* Field 1: Hours */}
      <text x="26" y="72" fill="#221a13" fontSize="7" fontFamily="sans-serif">
        Shop Hours
      </text>
      <rect x="26" y="76" width="146" height="18" fill="#faf6ec" stroke="#857662" strokeWidth="1" />
      <text x="32" y="88" fill="#221a13" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">
        Tue–Sat, 8:00 AM – 5:30 PM
      </text>

      {/* Field 2: Price */}
      <text x="26" y="108" fill="#221a13" fontSize="7" fontFamily="sans-serif">
        Unit Price
      </text>
      <rect x="26" y="112" width="76" height="18" fill="#faf6ec" stroke="#a84d1d" strokeWidth="1.2" />
      <text x="32" y="124" fill="#a84d1d" fontSize="7.5" fontFamily="sans-serif" fontWeight="700">
        $24.00
      </text>

      {/* Toggle: In Stock */}
      <rect x="110" y="112" width="62" height="18" fill="#221a13" />
      <circle cx="120" cy="121" r="3" fill="#a84d1d" />
      <text x="127" y="124" fill="#faf6ec" fontSize="7" fontFamily="sans-serif" fontWeight="700">
        IN STOCK
      </text>

      {/* Save button */}
      <rect x="26" y="138" width="146" height="16" fill="#a84d1d" />
      <text x="62" y="149" fill="#faf6ec" fontSize="7" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">
        PUBLISH INSTANTLY →
      </text>

      {/* Right: Live Storefront Sync */}
      <text x="198" y="56" fill="#a84d1d" fontSize="7" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">
        ● LIVE PUBLIC PAGE
      </text>
      <rect x="198" y="66" width="134" height="84" fill="#f2ead9" stroke="#221a13" strokeWidth="1" />
      <text x="208" y="84" fill="#221a13" fontSize="9" fontFamily="Georgia, serif" fontWeight="700">
        Small-Batch Balm
      </text>
      <text x="208" y="98" fill="#594c3d" fontSize="7" fontFamily="sans-serif">
        Updated 2 seconds ago
      </text>
      <line x1="208" y1="106" x2="322" y2="106" stroke="#c7b697" strokeWidth="1" />
      <text x="208" y="120" fill="#221a13" fontSize="8" fontFamily="sans-serif" fontWeight="700">
        $24.00
      </text>
      <rect x="272" y="111" width="50" height="13" fill="#221a13" />
      <text x="280" y="120" fill="#faf6ec" fontSize="6.5" fontFamily="sans-serif" fontWeight="600">
        AVAILABLE
      </text>
      <text x="208" y="139" fill="#594c3d" fontSize="7" fontFamily="sans-serif">
        Hours: Tue–Sat 8:00a–5:30p
      </text>
    </svg>
  );
}

/**
 * Custom architectural vector specimen plate for Theos Logos
 * (Biblical Greek & Hebrew Lexicon & Study Web Application).
 */
export function TheosLogosPlate() {
  return (
    <svg
      viewBox="0 0 1440 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Theos Logos interface specimen showing Greek and Hebrew interlinear scripture and Strong's lexicon panel"
      className="aspect-[3/2] w-full object-cover"
    >
      {/* Warm archival paper backdrop */}
      <rect width="1440" height="960" fill="#f5efe1" />
      <rect x="36" y="36" width="1368" height="888" fill="#faf6ec" stroke="#221a13" strokeWidth="2" />

      {/* Top Application Header Bar */}
      <rect x="36" y="36" width="1368" height="76" fill="#221a13" />
      <text x="76" y="82" fill="#faf6ec" fontSize="26" fontFamily="Georgia, serif" fontWeight="700" letterSpacing="0.5">
        THEOS LOGOS
      </text>
      <text x="310" y="80" fill="#c7b697" fontSize="15" fontFamily="sans-serif" letterSpacing="3">
        INTERLINEAR SCRIPTURE &amp; GREEK / HEBREW LEXICON
      </text>
      <rect x="1190" y="54" width="180" height="40" fill="#a84d1d" />
      <text x="1220" y="79" fill="#faf6ec" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        JOHN 1:1 · GEN 1:1
      </text>

      {/* Main Split Grid */}
      <line x1="860" y1="112" x2="860" y2="924" stroke="#221a13" strokeWidth="2" />
      <line x1="36" y1="200" x2="860" y2="200" stroke="#dfd2b8" strokeWidth="2" />

      {/* Left Pane: Manuscript Reader */}
      <text x="76" y="164" fill="#a84d1d" fontSize="15" fontFamily="sans-serif" fontWeight="700" letterSpacing="2.5">
        MANUSCRIPT VIEW · ΚΑΤΑ ΙΩΑΝΝΗΝ 1:1–4
      </text>

      {/* Interlinear Word Cards Row 1 */}
      {[
        { gr: "Ἐν", tr: "En", en: "In [the]", morph: "PREP", strong: "G1722", x: 76 },
        { gr: "ἀρχῇ", tr: "archē", en: "beginning", morph: "N-DSF", strong: "G746", x: 220 },
        { gr: "ἦν", tr: "ēn", en: "was", morph: "V-IAI-3S", strong: "G2258", x: 392 },
        { gr: "ὁ", tr: "ho", en: "the", morph: "T-NSM", strong: "G3588", x: 536 },
        { gr: "Λόγος", tr: "Logos", en: "Word", morph: "N-NSM", strong: "G3056", x: 668, active: true },
      ].map((w) => (
        <g key={w.strong}>
          <rect
            x={w.x}
            y="236"
            width={w.active ? "152" : "128"}
            height="146"
            fill={w.active ? "#fffdf7" : "#f2ead9"}
            stroke={w.active ? "#a84d1d" : "#c7b697"}
            strokeWidth={w.active ? "3" : "1.5"}
          />
          <text x={w.x + 16} y="266" fill="#a84d1d" fontSize="13" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.5">
            {w.strong}
          </text>
          <text x={w.x + 16} y="308" fill="#221a13" fontSize="28" fontFamily="Georgia, serif" fontWeight="700">
            {w.gr}
          </text>
          <text x={w.x + 16} y="336" fill="#594c3d" fontSize="15" fontFamily="Georgia, serif" fontStyle="italic">
            {w.tr}
          </text>
          <text x={w.x + 16} y="364" fill="#221a13" fontSize="14" fontFamily="sans-serif" fontWeight="600">
            {w.en} · {w.morph}
          </text>
        </g>
      ))}

      {/* English & Hebrew Comparative Parallel Block */}
      <line x1="76" y1="428" x2="820" y2="428" stroke="#dfd2b8" strokeWidth="1.5" />
      <text x="76" y="468" fill="#594c3d" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        PARALLEL TEXT &amp; EXEGESIS NOTES
      </text>
      <text x="76" y="518" fill="#221a13" fontSize="30" fontFamily="Georgia, serif">
        “In the beginning was the Word, and the Word was
      </text>
      <text x="76" y="560" fill="#221a13" fontSize="30" fontFamily="Georgia, serif">
        with God, and the Word was God.”
      </text>

      {/* Old Testament Hebrew Cross-Reference Box */}
      <rect x="76" y="608" width="744" height="264" fill="#fffdf7" stroke="#221a13" strokeWidth="1.5" />
      <rect x="76" y="608" width="744" height="44" fill="#f2ead9" />
      <line x1="76" y1="652" x2="820" y2="652" stroke="#221a13" strokeWidth="1.5" />
      <text x="100" y="636" fill="#221a13" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        HEBREW ROOT CORRELATION · GENESIS 1:1 (בְּרֵאשִׁית)
      </text>
      <text x="100" y="712" fill="#221a13" fontSize="34" fontFamily="Georgia, serif" fontWeight="700">
        H7225 · רֵאשִׁית (rēʾšîṯ) — beginning, firstfruits, chief part
      </text>
      <text x="100" y="762" fill="#594c3d" fontSize="20" fontFamily="sans-serif">
        Cross-indexed with LXX Ἐν ἀρχῇ ἐποίησεν ὁ Θεὸς — linking creation fiat
      </text>
      <text x="100" y="794" fill="#594c3d" fontSize="20" fontFamily="sans-serif">
        with the Johanine prologue’s pre-existent Logos (John 1:1–3).
      </text>
      <text x="100" y="842" fill="#a84d1d" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        MORPHOLOGY: NOUN · FEMININE SINGULAR CONSTRUCT
      </text>

      {/* Right Pane: Active Strong's Lexicon Inspector */}
      <rect x="862" y="112" width="540" height="810" fill="#fffdf7" />
      <rect x="900" y="152" width="140" height="34" fill="#a84d1d" />
      <text x="920" y="174" fill="#faf6ec" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        STRONG’S G3056
      </text>
      <text x="900" y="246" fill="#221a13" fontSize="64" fontFamily="Georgia, serif" fontWeight="700">
        λόγος, ου, ὁ
      </text>
      <text x="900" y="290" fill="#594c3d" fontSize="24" fontFamily="Georgia, serif" fontStyle="italic">
        Transliteration: logos · Phonetic: log&apos;-os
      </text>

      <line x1="900" y1="324" x2="1360" y2="324" stroke="#dfd2b8" strokeWidth="2" />

      <text x="900" y="366" fill="#594c3d" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        ROOT &amp; GRAMMATICAL PARSING
      </text>
      <text x="900" y="404" fill="#221a13" fontSize="20" fontFamily="sans-serif" fontWeight="600">
        From λέγω (G3004) · Nominative Singular Masculine
      </text>

      <line x1="900" y1="436" x2="1360" y2="436" stroke="#dfd2b8" strokeWidth="2" />

      <text x="900" y="478" fill="#594c3d" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        LEXICAL DEFINITION &amp; SEMANTIC RANGE
      </text>
      <text x="900" y="522" fill="#221a13" fontSize="21" fontFamily="sans-serif">
        I. Speech, word, utterance, decree, mandate.
      </text>
      <text x="900" y="562" fill="#221a13" fontSize="21" fontFamily="sans-serif">
        II. Account, reckoning, reason, divine wisdom.
      </text>
      <text x="900" y="602" fill="#221a13" fontSize="21" fontFamily="sans-serif">
        III. The Personal Word (Christ), self-revelation of God.
      </text>

      {/* Concordance Occurrences Box */}
      <rect x="900" y="654" width="460" height="218" fill="#f2ead9" stroke="#221a13" strokeWidth="1.5" />
      <text x="928" y="694" fill="#221a13" fontSize="14" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        CONCORDANCE FREQUENCY · 330 OCCURRENCES
      </text>
      <line x1="928" y1="712" x2="1332" y2="712" stroke="#c7b697" strokeWidth="1.5" />
      <text x="928" y="748" fill="#221a13" fontSize="18" fontFamily="sans-serif">
        Gospel of John ······························· 40x
      </text>
      <text x="928" y="784" fill="#221a13" fontSize="18" fontFamily="sans-serif">
        Acts of the Apostles ························· 65x
      </text>
      <text x="928" y="820" fill="#221a13" fontSize="18" fontFamily="sans-serif">
        Pauline Epistles ····························· 81x
      </text>
      <text x="928" y="852" fill="#a84d1d" fontSize="15" fontFamily="sans-serif" fontWeight="700">
        BUILT BY GERARDO CASTANEDA · LIVE WEB APPLICATION
      </text>
    </svg>
  );
}
