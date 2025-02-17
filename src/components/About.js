const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold my-6 text-center">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At Swiggy, our mission is to make food ordering and delivery as
          seamless and enjoyable as possible. We strive to connect food lovers
          with their favorite restaurants and provide an exceptional dining
          experience right at their doorstep.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg">
          We are a passionate team of food enthusiasts, technology experts, and
          customer service professionals dedicated to revolutionizing the food
          delivery industry. Our diverse backgrounds and shared love for great
          food drive us to constantly innovate and improve our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold">XYZ</h3>
            <p className="text-lg">Founder & CEO</p>
            <p className="text-md">
              XYZ is the visionary behind Swiggy, with a passion for food and
              technology. He leads the team with a focus on innovation and
              customer satisfaction.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold">XYZ</h3>
            <p className="text-lg">Chief Technology Officer</p>
            <p className="text-md">
              XYZ is the tech guru who ensures our platform runs smoothly and
              efficiently. She is always exploring new technologies to enhance
              our services.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold">XYZ</h3>
            <p className="text-lg">Head of Customer Service</p>
            <p className="text-md">
              XYZ is committed to providing the best customer experience. She
              leads our support team to ensure every customer is happy and
              satisfied.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          Have any questions or feedback? We'd love to hear from you! Reach out
          to us at{" "}
          <a href="mailto:saranshm10@gmail.com" className="text-blue-500">
            saranshm10@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
