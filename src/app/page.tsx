"use client"

import Image from "next/image";
import { Button } from "@heroui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaTiktok, 
  FaUniversity, 
  FaMicroscope, 
  FaPalette, 
  FaBookOpen,
  FaCheckCircle,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { RiMoneyEuroCircleLine, RiUserCommunityLine } from "react-icons/ri";
import { FaRegMoneyBill1, FaUserDoctor } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

import ReviewsCarousel from "@/components/ReviewsCarousel";

// --- Data ---

const socialLinks = [
  { icon: FaWhatsapp, href: "https://wa.me/972587542274", color: "bg-green-500" },
  { icon: FaInstagram, href: "https://www.instagram.com/susyacademy/", color: "bg-pink-600" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61556665914215", color: "bg-blue-600" },
  { icon: FaTiktok, href: "https://www.instagram.com/susyacademy/", color: "bg-black" }, // Note: Tiktok link in original was same as IG, keeping as provided or placeholder
];

const whyItalyReasons = [
  {
    icon: RiMoneyEuroCircleLine,
    title: "שכר לימוד נח",
    desc: "שכר הלימוד באיטליה מסובסד ונע בין 160 ל-2500 יורו בשנה בלבד (תלוי באוניברסיטה ובמצב הסוציו-אקונומי)."
  },
  {
    icon: FaRegMoneyBill1,
    title: "עלויות מחיה זולות",
    desc: "בהשוואה לישראל ולמדינות מערב אירופה אחרות, המחיה באיטליה זולה משמעותית."
  },
  {
    icon: FaGraduationCap,
    title: "תנאי קבלה נוחים",
    desc: "סיכויי קבלה גבוהים למגוון רחב של מקצועות, ללא צורך בפסיכומטרי בחלק גדול מהמקרים."
  },
  {
    icon: FaUniversity,
    title: "אקדמיה יוקרתית",
    desc: "האוניברסיטאות באיטליה הן מהוותיקות והטובות בעולם, עם תארים המוכרים בינלאומית."
  },
  {
    icon: RiUserCommunityLine,
    title: "קהילה ישראלית חמה",
    desc: "בערים רבות באיטליה קיימות קהילות סטודנטים ישראלים תומכות ומגובשות."
  },
  {
    icon: FaUserDoctor,
    title: "מסלולים קליניים בארץ",
    desc: "אפשרות לביצוע סבבים קליניים בבתי חולים בישראל ללומדים רפואה."
  }
];

const tracks = [
  {
    id: "medicine",
    label: "רפואה ומקצועות המדע",
    icon: FaMicroscope,
    title: "רפואה, רפואת שיניים, וטרינריה",
    desc: "המסלול המבוקש ביותר. הקבלה מותנית לרוב במבחן כניסה ארצי.",
    details: [
      "לימוד שפה איטלקית לרמת B2 (חובה ברוב האוניברסיטאות גם למסלולי אנגלית כחלק מהחיים והלימודים הקליניים).",
      "קורס מדעים מקיף (כימיה, ביולוגיה, פיזיקה).",
      "סימולציות מבחנים והכנה מנטלית."
    ]
  },
  {
    id: "design",
    label: "ארכיטקטורה ועיצוב",
    icon: FaPalette,
    title: "ארכיטקטורה, עיצוב אופנה, עיצוב פנים",
    desc: "איטליה היא בירת העיצוב העולמית. הלימודים משלבים מסורת עם חדשנות.",
    details: [
      "דרישה למבחן כניסה ייעודי (ארכיטקטורה) או הצגת תיק עבודות (עיצוב).",
      "דגש חזק על השפה האיטלקית ומונחים מקצועיים.",
      "הכנה למבחני הכניסה הספציפיים של המוסדות השונים (פוליטכניקו וכו')."
    ]
  },
  {
    id: "humanities",
    label: "מדעי הרוח והחברה",
    icon: FaBookOpen,
    title: "פסיכולוגיה, מנהל עסקים, שפות",
    desc: "מגוון עצום של תארים בתנאי קבלה נוחים במיוחד.",
    details: [
      "בדיקה של ממוצע בגרויות / ראיון אישי בחלק מהמוסדות.",
      "מבחן ידע בשפה האיטלקית.",
      "קורס השפה שלנו מכין אתכם בדיוק לרמה הנדרשת כדי לצלוח את הראיונות והמבחנים."
    ]
  }
];

// --- Components ---

function BackgroundShape({ src, className }: { src: string; className: string }) {
  return (
    <div className={`absolute opacity-10 pointer-events-none select-none z-0 ${className}`}>
      <Image src={src} alt="" width={300} height={300} className="w-full h-full object-contain" />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <BackgroundShape src="/images/shape1.svg" className="top-10 right-0 w-64 h-64 rotate-45" />
      <BackgroundShape src="/images/shape2.svg" className="bottom-20 left-10 w-80 h-80 -rotate-12" />
      <BackgroundShape src="/images/logo_purple_only.svg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] scale-125" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-custom-light-purple/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Text */}
        <div className="flex-1 text-center md:text-right space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 rounded-2xl bg-purple-50/50 border border-purple-400 shadow-xl mb-6 max-w-xl">
              <p className="text-primary-purple font-bold text-lg mb-1">
                📣 ההרשמה למועד פברואר 2026 החלה!
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                צרו איתנו קשר עכשיו על מנת להירשם והתחילו את דרכיכם ללימודים כבר באוקטובר 2026!
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-dark-purple leading-tight">
              <span className="block text-2xl md:text-3xl text-primary-purple mb-4 font-semibold">
                סוזי אקדמי - בית הספר המוביל בארץ להכנה ללימודים באיטליה!
              </span>
              הדרך הבטוחה שלך <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-purple">
                ללימודים באיטליה!
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 md:pl-12"
          >
            אנו מחכים לכם בסוזי אקדמי – הצעד הראשון שלכם לקריירה בינלאומית מצליחה, בנוחות ובביטחון. מכינה לרפואה, מדעים ולימודי שפה ברמה הגבוהה ביותר.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 items-center"
          >
            <a href="https://wa.me/972587542274" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg"
                radius="full"
                className="bg-primary-purple text-white font-bold text-lg shadow-lg hover:bg-primary-purple hover:scale-105 transition-transform h-14 px-8 w-full flex items-center justify-center gap-3"
              >
                <span>דברו איתנו בוואטסאפ</span>
                <FaWhatsapp className="text-2xl" />
              </Button>
            </a>
            <Button 
              size="lg"
              radius="full"
              variant="bordered"
              className="border-2 border-primary-purple text-primary-purple font-bold text-lg hover:bg-purple-50 h-14 px-8 w-full sm:w-auto flex items-center justify-center"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              מי אנחנו?
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
            {/* Decorative ring */}
            <div className="absolute inset-0 border-4 border-dashed border-primary-purple/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-4 bg-gradient-to-br from-primary-purple to-accent-purple rounded-full opacity-10" />
            
            <Image 
              src="/images/susy_avatar.jpg"
              alt="Susy Amram"
              fill
              className="rounded-full object-cover border-8 border-white shadow-2xl z-10"
              priority
            />
            
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-bold text-dark-purple text-sm">מעל 15 שנות ניסיון</p>
                <p className="text-xs text-gray-500">בהכנה ללימודים באיטליה</p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
         <div className="w-24 h-24 bg-[radial-gradient(#6a1b9a_2px,transparent_2px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-4">
           <div className="lg:w-1/2 relative flex justify-center">
             <div className="relative max-w-md">
                <Image 
                  src="/images/susy_with_kids.png" 
                  alt="Susy with kids" 
                  width={500} 
                  height={350} 
                  className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 object-cover"
                />
             </div>
           </div>
           
           <div className="lg:w-1/2 space-y-6 text-right">
             <h2 className="text-4xl font-bold text-dark-purple">אז מי זאת סוזי?</h2>
             <div className="w-20 h-1.5 bg-accent-purple rounded-full" />
             <p className="text-lg text-gray-600 leading-relaxed font-medium">
               סוזי עמרם, מורה ומלווה מסורה, היא הרבה יותר מיועצת אקדמית. ילידת איטליה שעלתה לישראל בשנת 1996 והתיישבה בחיפה, היא אמא לשישה ילדים.
             </p>
             <p className="text-lg text-gray-700 font-medium leading-relaxed">
               סוזי, בוגרת תואר ראשון בביולוגיה ובעלת תעודת הוראה מאוניברסיטת בר-אילן, משלבת את אהבתה להוראה עם קשריה העמוקים למערכת ההשכלה הגבוהה באיטליה. בזכות ההיכרות האישית והמקיפה שלה עם השפה, התרבות והבירוקרטיה האיטלקית, היא מכינה בהצלחה סטודנטים ללימודים שם מאז שנת 2007.
             </p>
             <p className="text-lg text-gray-700 font-medium leading-relaxed">
               סוזי מלווה את הסטודנטים בדרכם ללימודים באיטליה במסירות ובאכפתיות יוצאת דופן, תוך מתן יחס אישי לכל סטודנט וסטודנטית ומענה מדויק לצרכים הייחודיים שלהם. היא רואה בכל אתגר של הסטודנטים משימה אישית ומטפלת בכל פנייה במלוא הרצינות והחום. הסטודנטים מספרים שסוזי היא עבורם "אמא שנייה" – כזו שממשיכה ללוות ולדאוג להם גם זמן רב אחרי שסיימו את לימודיה אצלה.
             </p>
             <div className="pt-4">
                <a href="https://wa.me/972587542274" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary-purple text-white font-semibold shadow-lg px-4 py-2 rounded-full hover:scale-105">
                    דברו עם סוזי עכשיו
                  </Button>
                </a>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceBanner() {
  return (
    <section className="w-full relative h-[400px] overflow-hidden flex items-center justify-center">
       <Image 
         src="/images/italycanal.gif" 
         alt="Italy Atmosphere" 
         fill 
         className="object-cover brightness-50"
         unoptimized 
       />
       <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/80 to-transparent flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
             <h2 className="text-4xl md:text-5xl font-bold mb-4">לחיות וללמוד באווירה איטלקית</h2>
             <p className="text-xl md:text-2xl font-light">
               אנחנו לא רק מכינים אתכם למבחן, אלא נותנים לכם טעימה מהחלום האיטלקי עוד לפני שעליתם למטוס.
             </p>
          </div>
       </div>
    </section>
  )
}

function WhyItaly() {
  return (
    <section id="why-italy" className="py-20 relative overflow-hidden">
      <BackgroundShape src="/images/shape3.svg" className="top-0 left-0 w-96 h-96 opacity-5 rotate-180" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-dark-purple mb-4">למה ללמוד דווקא באיטליה?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          איטליה מציעה שילוב נדיר של אקדמיה ברמה עולמית, חווית חיים בלתי נשכחת ותנאים נוחים לסטודנט הישראלי.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItalyReasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border border-purple-50 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-purple text-3xl">
                <reason.icon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  const [activeTab, setActiveTab] = useState("medicine");

  const activeTrack = tracks.find(t => t.id === activeTab) || tracks[0];

  return (
    <section id="tracks" className="py-20 relative overflow-hidden">
       {/* Decorative Shapes */}
       <BackgroundShape src="/images/shape4.svg" className="top-10 right-0 w-80 h-80 opacity-10 rotate-12" />
       <BackgroundShape src="/images/shape3.svg" className="bottom-10 left-10 w-64 h-64 opacity-10 -rotate-45" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-dark-purple mb-12">מסלולי הלימוד והקבלה</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Menu */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`flex items-center gap-4 p-6 rounded-2xl text-right transition-all duration-300 ${
                  activeTab === track.id 
                    ? "bg-primary-purple text-white shadow-lg scale-105" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <track.icon className="text-2xl shrink-0" />
                <span className="font-bold text-lg">{track.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
             <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-100 h-full relative overflow-hidden shadow-sm"
             >
               {/* Optional subtle background image for card */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-purple to-accent-purple" />
               
               <h3 className="text-2xl md:text-3xl font-bold text-dark-purple mb-4">{activeTrack.title}</h3>
               <p className="text-lg text-gray-700 mb-8 border-b border-purple-200 pb-6">{activeTrack.desc}</p>
               
               <div className="space-y-6">
                 <h4 className="font-bold text-xl text-primary-purple">מה נדרש מכם?</h4>
                 <ul className="space-y-4">
                   {activeTrack.details.map((detail, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                       <span className="text-gray-700">{detail}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="mt-10">
                 <a href="https://wa.me/972587542274" target="_blank" rel="noopener noreferrer">
                   <Button className="bg-primary-purple text-white font-semibold shadow-lg px-4 py-2 rounded-full hover:scale-105">
                     לייעוץ אישי על המסלול
                   </Button>
                 </a>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseStructure() {
  return (
    <section id="how-we-learn" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-purple mb-4">איך לומדים אצל סוזי?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בנינו עבורכם מסלול הכנה חכם, מדויק ומקיף שנועד להביא אתכם ליום המבחן בשיא המוכנות – מבחינת ידע, שפה וביטחון עצמי.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Italian Course Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="bg-primary-purple p-6 text-white text-center">
              <h3 className="text-2xl font-bold">שלב א&apos;: קורס איטלקית</h3>
              <p className="opacity-90 mt-1">בונים בסיס חזק לשפה</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-bold text-gray-700">היקף הקורס</span>
                <span className="text-primary-purple font-bold text-lg">350 שעות אקדמיות</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-bold text-gray-700">יעד סופי</span>
                <span className="bg-purple-100 text-primary-purple px-3 py-1 rounded-full text-sm font-bold">רמה B2</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-dark-purple">מה לומדים?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>דקדוק מתקדם וזמנים מורכבים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>תרגול שטף דיבור, קריאה וכתיבה אקדמית</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>אוצר מילים רלוונטי לחיים וללימודים</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Science Course Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="bg-accent-purple p-6 text-white text-center">
              <h3 className="text-2xl font-bold">שלב ב&apos;: קורס מדעים</h3>
              <p className="opacity-90 mt-1">ממוקד למבחני הכניסה</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-bold text-gray-700">היקף הקורס</span>
                <span className="text-accent-purple font-bold text-lg">240 שעות אקדמיות</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-bold text-gray-700">חלוקה לנושאים</span>
                <span className="bg-purple-100 text-accent-purple px-3 py-1 rounded-full text-sm font-bold">80 שעות לכל מקצוע</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-dark-purple">מה מקבלים?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>לימוד פיזיקה, כימיה וביולוגיה מאפס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span>סימולציות מלאות של מבחני עבר</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <span className="font-bold text-primary-purple">בונוס: שיעורי תגבור פרטיים ללא עלות!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           <div className="p-4 bg-white rounded-2xl shadow-sm border border-purple-50">
             <div className="text-3xl mb-2">💻</div>
             <h4 className="font-bold text-dark-purple">לימודים בזום</h4>
             <p className="text-sm text-gray-500">נוחות מקסימלית מהבית</p>
           </div>
           <div className="p-4 bg-white rounded-2xl shadow-sm border border-purple-50">
             <div className="text-3xl mb-2">📹</div>
             <h4 className="font-bold text-dark-purple">הקלטות מלאות</h4>
             <p className="text-sm text-gray-500">לצפייה חוזרת בכל זמן</p>
           </div>
           <div className="p-4 bg-white rounded-2xl shadow-sm border border-purple-50">
             <div className="text-3xl mb-2">👥</div>
             <h4 className="font-bold text-dark-purple">קבוצות קטנות</h4>
             <p className="text-sm text-gray-500">עד 12 תלמידים בכיתה</p>
           </div>
           <div className="p-4 bg-white rounded-2xl shadow-sm border border-purple-50">
             <div className="text-3xl mb-2">📑</div>
             <h4 className="font-bold text-dark-purple">ליווי בירוקרטי</h4>
             <p className="text-sm text-gray-500">טיפול מלא בניירת ורישום</p>
           </div>
        </div>

      </div>
    </section>
  );
}

function ContactBar() {
  return (
    <div id="contact" className="text-white py-12 relative bg-dark-purple/90 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">רוצים לשמוע עוד? אנחנו זמינים לכל שאלה</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 text-lg">
          <a href="tel:0587542274" className="flex items-center gap-3 hover:text-accent-purple transition-colors bg-white/10 px-6 py-3 rounded-full">
            <FaPhone />
            <span>058-754-2274</span>
          </a>
          <a href="mailto:susyacademyitaly@gmail.com" className="flex items-center gap-3 hover:text-accent-purple transition-colors bg-white/10 px-6 py-3 rounded-full">
            <FaEnvelope />
            <span>susyacademyitaly@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
            >
              <link.icon className="text-2xl" />
            </a>
          ))}
        </div>
        <p className="text-gray-300">© 2025 Susy Academy. כל הזכויות שמורות.</p>
      </div>
    </div>
  );
}

function Bureaucracy() {
  const steps = [
    "רישום לאוניברסיטאות",
    "הרשמה למבחני כניסה",
    "התנהלות מול השגרירות",
    "מעקב אחר התקדמות הויזה",
    "מילוי מסמכים נדרשים לויזה ושהייה קבועה באיטליה"
  ];

  return (
    <section id="bureaucracy" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative max-w-md">
              <Image 
                src="/images/passport.jpg" 
                alt="Italy Bureaucracy" 
                width={500} 
                height={350} 
                className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover border-8 border-white/80"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6 text-right">
            <h2 className="text-4xl font-bold text-dark-purple">ליווי בירוקרטי מקצה לקצה</h2>
            <div className="w-20 h-1.5 bg-accent-purple rounded-full" />
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              התהליך הבירוקרטי ללימודים באיטליה הוא ארוך ומורכב, הוא משתנה בכל שנה ודורש ליווי של מישהי שלא רק מכירה את התהליך, אלא גם נשארת מעודכנת בכל שינוי של ממשלת איטליה.
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              כדוברת איטלקית שפת אם ובעלת היכרות עמוקה עם הבירוקרטיה האיטלקית, סוזי נשארת מעודכנת בכל רגע נתון בדרישות המשתנות – כדי שאתם לא תצטרכו לדאוג.
            </p>
            <p className="text-lg text-primary-purple font-bold leading-relaxed italic">
              בלי טעויות, בלי תקלות ובלי כאבי ראש. תנו לסוזי לטפל בכל הבירוקרטיה עבורכם, כדי שתוכלו להתרכז במה שבאמת חשוב – הלימודים שלכם.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className="font-bold text-xl text-dark-purple">בתהליך זה, סוזי איתכם בכל שלב:</h4>
              <ul className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 justify-start">
                    <FaCheckCircle className="text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main Page ---

export default function Home() {
  return (
    <main className="min-h-screen relative" dir="rtl">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-[-1]">
        <Image 
          src="/images/gradient.png" 
          alt="" 
          fill 
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Navigation / Header */}
      <header className="sticky top-0 left-0 w-full z-50 py-3 px-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">
        <div className="container mx-auto flex justify-between items-center">
          {/* Right: Logo & Nav */}
          <div className="flex items-center gap-8">
            <Image 
              src="/images/susylogo.svg" 
              alt="Susy Academy" 
              width={150} 
              height={60} 
              className="object-contain h-12 w-auto" 
              priority
            />
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                מי אנחנו?
              </button>
              <button 
                onClick={() => document.getElementById('why-italy')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                למה איטליה?
              </button>
              <button 
                onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                מסלולי לימוד
              </button>
              <button 
                onClick={() => document.getElementById('how-we-learn')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                איך לומדים?
              </button>
              <button 
                onClick={() => document.getElementById('bureaucracy')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                ליווי בירוקרטי
              </button>
              <button 
                onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                המלצות
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-dark-purple font-bold hover:text-primary-purple transition-colors cursor-pointer"
              >
                צור קשר
              </button>
            </nav>
          </div>

          {/* Left: Contact & Socials */}
          <div className="flex items-center gap-4">
            {/* Contact Info (Desktop) */}
            <div className="hidden lg:flex flex-col items-end text-sm text-gray-600 gap-1 ml-4 border-l pl-4 border-gray-200">
              <a href="tel:0587542274" className="flex items-center gap-2 hover:text-primary-purple transition-colors">
                <span>058-754-2274</span>
                <FaPhone className="text-primary-purple text-xs" />
              </a>
              <a href="mailto:susyacademyitaly@gmail.com" className="flex items-center gap-2 hover:text-primary-purple transition-colors">
                <span>susyacademyitaly@gmail.com</span>
                <FaEnvelope className="text-primary-purple text-xs" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
               {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${link.color} text-white w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm`}
                >
                  <link.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <Hero />
      <About />
      <ExperienceBanner />
      <WhyItaly />
      <Tracks />
      <CourseStructure />
      <Bureaucracy />
      <div id="reviews">
        <ReviewsCarousel />
      </div>
      <ContactBar />
    </main>
  );
}
