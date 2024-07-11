import React from 'react'

const Footer = () => {
  return (
    <div class="footer bg-gray-100">
  <div class="footer-content container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="col">
        <h3 class="text-lg font-semibold mb-4">About</h3>
        <p class="text-gray-600">
          Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
        </p>
      </div>
      <div class="col">
        <h3 class="text-lg font-semibold mb-4">Contact</h3>
        <div class="flex items-center mb-2">
          <i class="fas fa-map-marker-alt text-gray-600 mr-2"></i>
          <p class="text-gray-600">Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala, 688006</p>
        </div>
        <div class="flex items-center mb-2">
          <i class="fas fa-mobile-alt text-gray-600 mr-2"></i>
          <p class="text-gray-600">Phone: 0471 272 0261</p>
        </div>
        <div class="flex items-center mb-2">
          <i class="fas fa-envelope text-gray-600 mr-2"></i>
          <p class="text-gray-600">Email: store@jsdev.com</p>
        </div>
      </div>
      <div class="col">
        <h3 class="text-lg font-semibold mb-4">Categories</h3>
        <ul class="list-none space-y-2">
          <li><a href="/" class="text-gray-600 hover:underline">Headphones</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Smart Watches</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Bluetooth Speakers</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Wireless Earbuds</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Home Theatre</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Projectors</a></li>
        </ul>
      </div>
      <div class="col">
        <h3 class="text-lg font-semibold mb-4">Pages</h3>
        <ul class="list-none space-y-2">
          <li><a href="/" class="text-gray-600 hover:underline">Home</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">About</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Privacy Policy</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Returns</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Terms & Conditions</a></li>
          <li><a href="/" class="text-gray-600 hover:underline">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* <div class="bottom-bar border-t border-gray-200">
    <div class="bottom-bar-content flex items-center py-4 md:flex-row md:justify-between md:px-4">
      <p class="text-gray-600 text-sm">JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS.</p>
    </div>
  </div> */}
</div>

  )
}

export default Footer