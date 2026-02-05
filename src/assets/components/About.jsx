const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#fbe5d5] px-6 py-20 flex justify-center">
      <div className="max-w-11/12 bg-white rounded-2xl shadow-lg p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-[#6b4f4f]">
          About This App
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This application is specially designed to help <b>children with autism</b> learn about <b>vehicles</b> in a simple, visual, and engaging way.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Many children learn better when information is shown through
          <b> pictures, short videos, and clear explanations</b>.
          This app focuses on making learning calm, enjoyable, and easy to understand.
        </p>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-[#6b4f4f]">
          What Children Learn
        </h2>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Different types of vehicles</li>
          <li>Land, air, and water transportation</li>
          <li>What each vehicle is used for</li>
          <li>Basic vocabulary related to vehicles</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-[#6b4f4f]">
          App Features
        </h2>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Clear images and sliders for visual learning</li>
          <li>Simple sentences that are easy to read</li>
          <li>Short videos to improve understanding</li>
          <li>Calm colors and friendly design</li>
          <li>Easy navigation for independent use</li>
        </ul>

        <hr className="border-gray-200" />

        <h2 className="text-2xl font-semibold text-[#6b4f4f]">
          Who Can Use This App
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          This app can be used by:
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Children with autism</li>
          <li>Parents and caregivers</li>
          <li>Teachers and special educators</li>
          <li>Therapists and learning centers</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed">
          The goal is to support learning in a way that feels
          <b> safe, enjoyable, and stress-free</b>.
        </p>

      </div>
    </div>
  );
};

export default About;
