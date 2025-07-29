export function ServicesSection() {
  const services = [
    {
      title: "Strength Training",
      description: "Build muscle and boost your power with custom resistance programs.",
      icon: <FaDumbbell className="text-3xl text-red-500" />,
    },
    {
      title: "Weight Loss",
      description: "Burn fat and tone your body with targeted workouts and guidance.",
      icon: <FaDumbbell className="text-3xl text-yellow-400" />,
    },
    {
      title: "Nutrition Coaching",
      description: "Personalized meal plans and macros to match your fitness goals.",
      icon: <FaDumbbell className="text-3xl text-green-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          What I Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black border border-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-red-500/20 transition-all focus:outline focus:outline-red-500"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
