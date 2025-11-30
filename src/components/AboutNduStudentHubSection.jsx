import Image from "next/image";
import Link from "next/link";

const AboutNduStudentHubSection = () => {
  const stats = [
    { id: 1, label: "Dedicated Team Members", value: "10+" }, // Example value
    { id: 2, label: "School Events Covered Annually", value: "50+" }, // Example value
    { id: 3, label: "Years Connecting Students", value: "3" }, // Example value
  ];
  return (
    <section className="section sm:px-6 lg:px-8  md:py-16 bg-gray-100 ">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ">
          {/* image coloumn */}
          <div className="mb-10 lg:mb-0">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl relative w-full h-[400px]">
              <Image
                src="/images/students-gathering.jpg"
                alt="ndustudenthub team"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Text Coloumn */}
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              The Heart of Your Campus Connection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ndustudenthub is more than just a website; it&apos;s a vibrant
              community platform built by students, for students. We&apos;re
              passionate about keeping you informed, engaged, and connected to
              every facet of student life at Niger Delta University.
            </p>
            <div className="mt-10">
              <dl className="space-y-8 sm:space-y-0">
                {stats.map((stat) => (
                  <div key={stat.id} className="relative p-4  rounded-lg ">
                    <dt>
                      <p className="text-2xl leading-6 font-bold ">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link
                  href="/about-us"
                  className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn more about our mission & team &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNduStudentHubSection;

//     { id: 1, label: "Dedicated Team Members", value: "10+" }, // Example value
//     { id: 2, label: "School Events Covered Annually", value: "50+" }, // Example value
//     { id: 3, label: "Years Connecting Students", value: "3" }, // Example value
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="container mx-auto">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
//           {/* Image Column */}
//           <div className="mb-10 lg:mb-0">
//             <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/images/ndustudenthub-team-or-event.jpg" // Replace with a relevant image
//                 alt="ndustudenthub team or event montage"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>

//           {/* Text Content Column */}
//           <div className="relative">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
//               The Heart of Your Campus Connection
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               ndustudenthub is more than just a website; it&apos;s a vibrant
//               community platform built by students, for students. We&apos;re
//               passionate about keeping you informed, engaged, and connected to
//               every facet of student life at [Your School&apos;s Name].
//             </p>
//             <div className="mt-10">
//               <dl className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-1">
//                 {" "}
//                 {/* Adjusted grid for stats */}
//                 {stats.map((stat) => (
//                   <div
//                     key={stat.id}
//                     className="relative p-4 bg-gray-50 rounded-lg shadow-sm"
//                   >
//                     <dt>
//                       <p className="text-2xl leading-6 font-bold text-blue-600">
//                         {stat.value}
//                       </p>
//                       <p className="mt-1 text-sm font-medium text-gray-500">
//                         {stat.label}
//                       </p>
//                     </dt>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//             <div className="mt-10">
//               <Link
//                 href="/about-us"
//                 className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors"
//               >
//                 Learn more about our mission & team &rarr;
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutNdustudenthubSection;