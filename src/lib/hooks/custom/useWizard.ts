/**
 * React custom hook
 * Handle wizard form by navigating through different component
 * Input will be the list of React JSX components and default step (optional)
 * @returns: The hook returns with the functions for navigating  through components, current component and current step
 */

import { useState } from "react";

const useWizard = (components: any, forceStep: number = 1) => {
  // keep the current component index
  // if assigning step, set as default
  const [currentStepIndex, setCurrentStepIndex] = useState(forceStep - 1);

  /**
   * go to the next step
   * @returns
   */
  const next = () => {
    if (currentStepIndex >= components.length - 1) return;
    setCurrentStepIndex((step) => step + 1);
  };

  /**
   * go back to the previous steps
   * @returns
   */
  const back = () => {
    if (currentStepIndex <= 0) return;
    setCurrentStepIndex((step) => step - 1);
  };

  /**
   * go the given step
   * @param index
   * @returns
   */
  const goTo = (index: number) => setCurrentStepIndex(index);

  return {
    next,
    back,
    goTo,
    Component: components[currentStepIndex],
    currentStep: currentStepIndex + 1,
  };
};

export default useWizard;
