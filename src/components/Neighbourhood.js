import React from 'react';

const Neighbourhood = () => {
  const categories = [
    {
      title: 'FOOD CAFE & ESSENTIALS',
      items: ['Local Market', 'Fresh Grocers', 'Daily Essentials']
    },
    {
      title: 'EDUCATIONAL CENTRES',
      items: ['International Academy', 'Primary School', 'Learning Center']
    },
    {
      title: 'HOSPITALS & MEDICAL CARE',
      items: ['City Hospital', 'Medical Hub', 'Wellness Center']
    },
    {
      title: 'HOTELS & BANQUETS',
      items: ['Luxury Hotel', 'Event Center', 'Business Hotel']
    },
    {
      title: 'LEISURE & ENTERTAINMENT',
      items: ['Sports Complex', 'Shopping Mall', 'Entertainment Hub']
    }
  ];

  return (
    <div className="min-h-screen bg-[#02050e] text-white py-8">
      {/* Header Section */}
      <div className="mb-12 px-8">
        <h1 className="text-4xl mb-4">
          <span className="text-amber-600">Apartment</span>
          <span className="text-white"> Neighborhoods</span>
        </h1>
        <p className="text-gray-300 max-w-2xl">
          From the vibrant ground level plaza to the terraces, private gardens, balconies and lush
          rooftop work spaces, we offer an array of amenities...
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left Column - Categories */}
        <div className="space-y-8 px-8">
          {categories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400 hover:text-amber-600 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="relative">
          <div className="bg-[#02050e] rounded-lg h-[600px] w-full opacity-50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[url('/map.png')] rounded-lg">
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Neighbourhood;