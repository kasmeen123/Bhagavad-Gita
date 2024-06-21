// import { ThemeProvider } from "@/components/custom/theme-provider"
// import "./globals.css"
// import { Inter as FontSans } from "next/font/google"
// import { cn } from "@/lib/utils"
// import { ModeToggle } from "@/components/custom/Button"
// import Sidebar from "@/components/custom/sidebar"


// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <div className='p-3 flex justify-end>
//             <ModeToggle/>
//             </div>
//            <div className='flex flex-wrap gap-5'>
//            <div className='w-2/12 md:w-3/12'>
//               <Sidebar/>
//             </div>
//             <div className='w-9/12 md:w-8/12'>
//             {children}
//             </div>
//            </div>
            
//           </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import { ThemeProvider } from "@/components/custom/theme-provider";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/custom/Button";
import Sidebar from "@/components/custom/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-between items-center p-3">
            <h1 className="mt-4 text-2xl font-bold">Chapters</h1>
            <ModeToggle className="" />
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="w-2/12 md:w-3/12">
              <Sidebar />
            </div>
            <div className="w-9/12 md:w-8/12 text-gray-400">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
