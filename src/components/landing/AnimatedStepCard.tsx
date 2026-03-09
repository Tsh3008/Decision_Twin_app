type AnimatedStepCardProps = {
  title: string;
  description: string;
  number: string;
};

const AnimatedStepCard = ({ title, description, number }: AnimatedStepCardProps) => {
  return (
    <div className="step-card-outer">
      <div className="step-card-dot" />
      <div className="step-card">
        <div className="step-card-ray" />
        <div className="step-card-number">{number}</div>
        <div className="step-card-title">{title}</div>
        <div className="step-card-desc">{description}</div>
        <div className="step-card-line step-card-line--top" />
        <div className="step-card-line step-card-line--left" />
        <div className="step-card-line step-card-line--bottom" />
        <div className="step-card-line step-card-line--right" />
      </div>
    </div>
  );
};

export { AnimatedStepCard };
