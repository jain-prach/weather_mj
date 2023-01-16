import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        {/* <Search />
        <Current_weather/>
        <Forecast />
        <Map />
        <Save_Locations />
        <Sun_Moon /> */}
      </body>
    </html>
  )
}
