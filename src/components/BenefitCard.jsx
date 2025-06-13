const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    {icon}
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default BenefitCard;
