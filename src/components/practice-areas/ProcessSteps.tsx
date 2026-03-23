type Step = {
  number: number;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-serif font-bold text-sm">
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-8 bg-gray-200 mx-auto mt-2" />
            )}
          </div>
          <div className="pb-4">
            <h4 className="font-serif text-base font-bold text-navy mb-1">
              {step.title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
