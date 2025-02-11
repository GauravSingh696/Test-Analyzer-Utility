import React from 'react'


const Example = () => {
  return (
    <div class="grid place-content-center h-screen bg-blue-950">
      {/* <body class="grid place-content-center h-screen bg-amber-800"> */}
        <div class="p-6 max-w-svh">
          <div class="bg-red-500 rounded-3xl flex p-3 space-x-5 transform">
            <div class="w-65">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
                alt="fault" />
            </div>
            <div class="text-white place-content-center">
              <div class="font-bold text-4xl">Tailwind Css</div>
              <p>By Gaurav Singh</p>
            </div>
          </div>
        </div>
      {/* </body> */}
    </div>
  )
}

export default Example
