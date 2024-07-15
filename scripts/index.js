let popularHTML = '';
popular.forEach((popular) => {
  popularHTML += `
    <div class="w-full md:w-[280px] lg:w-[304px] h-96 my-2 bg-white rounded-md shadow-md transform transition-transform ease-in-out duration-300 hover:scale-105">
      <div class="flex justify-between p-2">
        <div class="">
          <div class="h-6 font-bold text-xl text-text-2">${popular.name}</div>
          <div class="w-32 h-5 font-bold text-sm text-text-3">${popular.type}</div>
        </div>
        <button><img src="images/${popular.liked}.svg" alt="Error loading image"></button>
      </div>
      <div class="w-full md:w-[280px] lg:w-[304px] h-24 mt-28">
        <img src="images/${popular.image}.svg" alt="Error loading image">
      </div>
      <div class="mt-4 mx-6 w-64 h-6 flex">
        <div class="flex w-14">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/gas-station.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${popular.gas}</div>
        </div>
        <div class="flex w-[76px] mx-4">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/Car.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${popular.gear}</div>
        </div>
        <div class="flex w-24">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/profile-2user.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${popular.people} People</div>
        </div>
      </div>
      <div class="h-11 flex justify-evenly mt-4">
        <div class="w-28 h-11 text-black font-bold text-xl">$${(popular.priceCents / 100).toFixed(2)}/ <span class="font-bold text-text-1 text-sm">day</span></div>
        <button class="w-28 h-11 bg-ads-2 hover:bg-blue-800 rounded-md text-white text-4 font-semibold">Rent Now</button>
      </div>
    </div>
  `;
});

document.querySelector('#js-popular-cars').innerHTML = popularHTML;

let recommendedHTML = '';
recommended.forEach((recommended) => {
  recommendedHTML += `
    <div class="w-full md:w-[280px] lg:w-[304px] h-96 my-2 bg-white rounded-md shadow-md transform transition-transform ease-in-out duration-300 hover:scale-105">
      <div class="flex justify-between p-2">
        <div class="">
          <div class="h-6 font-bold text-xl text-text-2">${recommended.name}</div>
          <div class="w-32 h-[20px] font-bold text-sm text-text-3">${recommended.type}</div>
        </div>
        <button><img src="images/${recommended.liked}.svg" alt="Error loading image"></button>
      </div>
      <div class="w-full md:w-[280px] lg:w-[304px]] h-24 mt-28">
        <img src="images/${recommended.image}.svg" alt="Error loading image">
      </div>
      <div class="mt-[15px] mx-6 w-64 h-6 flex">
        <div class="flex w-14">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/gas-station.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended.gas}</div>
        </div>
        <div class="flex w-[76px] mx-4">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/Car.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended.gear}</div>
        </div>
        <div class="flex w-24">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/profile-2user.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended.people} People</div>
        </div>
      </div>
      <div class="h-11 flex justify-evenly mt-4">
        <div class="w-28 h-11 text-black font-bold text-xl">$${(recommended.priceCents / 100).toFixed(2)}/ <span class="font-bold text-text-1 text-sm">day</span></div>
        <button class="w-28 h-11 bg-ads-2 hover:bg-blue-800 rounded-md text-white text-4 font-semibold">Rent Now</button>
      </div>
    </div>
  `;
});

document.querySelector('#js-recommended-cars').innerHTML = recommendedHTML;

let recommendedHTML1 = '';
recommended1.forEach((recommended1) => {
  recommendedHTML1 += `
    <div class="w-full md:w-[280px] lg:w-[304px] h-96 my-2 bg-white rounded-md shadow-md transform transition-transform ease-in-out duration-300 hover:scale-105">
      <div class="flex justify-between p-2">
        <div class="">
          <div class="h-6 font-bold text-xl text-text-2">${recommended1.name}</div>
          <div class="w-32 h-[20px] font-bold text-sm text-text-3">${recommended1.type}</div>
        </div>
        <button><img src="images/${recommended1.liked}.svg" alt="Error loading image"></button>
      </div>
      <div class="w-full md:w-[280px] lg:w-[304px] h-24 mt-28">
        <img src="images/${recommended1.image}.svg" alt="Error loading image">
      </div>
      <div class="mt-[15px] mx-6 w-64 h-6 flex">
        <div class="flex w-14">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/gas-station.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended1.gas}</div>
        </div>
        <div class="flex w-[76px] mx-4">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/Car.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended1.gear}</div>
        </div>
        <div class="flex w-24">
          <div class="text-text-1 font-medium text-sm pr-[6px]">
            <img src="images/profile-2user.svg" alt="Error loading image">
          </div>
          <div class="text-text-1 font-medium text-sm">${recommended1.people} People</div>
        </div>
      </div>
      <div class="h-11 flex justify-evenly mt-4">
        <div class="w-28 h-11 text-black font-bold text-xl">$${(recommended1.priceCents / 100).toFixed(2)}/ <span class="font-bold text-text-1 text-sm">day</span></div>
        <button class="w-28 h-11 bg-ads-2 hover:bg-blue-800 rounded-md text-white text-4 font-semibold">Rent Now</button>
      </div>
    </div>
  `;
});

document.querySelector('#js-recommended-cars-1').innerHTML = recommendedHTML1;


document.getElementById('swap-button').addEventListener('click', function() {
    // Get the values of pick-up fields
    var pickupLocation = document.getElementById('pickup-location').value;
    var pickupDate = document.getElementById('pickup-date').value;
    var pickupTime = document.getElementById('pickup-time').value;

    // Get the values of drop-off fields
    var dropoffLocation = document.getElementById('dropoff-location').value;
    var dropoffDate = document.getElementById('dropoff-date').value;
    var dropoffTime = document.getElementById('dropoff-time').value;

    // Swap the values
    document.getElementById('pickup-location').value = dropoffLocation;
    document.getElementById('pickup-date').value = dropoffDate;
    document.getElementById('pickup-time').value = dropoffTime;

    document.getElementById('dropoff-location').value = pickupLocation;
    document.getElementById('dropoff-date').value = pickupDate;
    document.getElementById('dropoff-time').value = pickupTime;

    // Swap the selected radio buttons
    if (document.getElementById('pickup').checked) {
        document.getElementById('dropoff').checked = true;
        document.getElementById('dropoff').dispatchEvent(new Event('change'));
    } else {
        document.getElementById('pickup').checked = true;
        document.getElementById('pickup').dispatchEvent(new Event('change'));
    }
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    hamburgerBtn.classList.add('hidden');
}

function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    hamburgerBtn.classList.remove('hidden');
}

hamburgerBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true
  });
});