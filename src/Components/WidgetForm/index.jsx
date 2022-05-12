import React, { useState } from 'react'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export function WidgetForm() {
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback(){
    setFeedbackSent(false);
  }

  return (
    <div className="bg-[#E5E5E5] dark:bg-zinc-900 p-4 realtive rounded-2xl mb-4 flex flex-col 
    items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent 
        ? <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
        : 
          <FeedbackContentStep 
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={() => setFeedbackSent(true)}
          />
      }
    </div>
  )
}
