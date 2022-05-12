import { ArrowLeft, Camera, WarningCircle } from 'phosphor-react';
import React, { useState } from 'react'
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

export function FeedbackContentStep({
  onFeedbackSent
}) {
  const [screenshot, setScreenshot] = useState(null);
  const [comment, setComment] = useState('');


  function handleSubmitFeedback(event){
    event.preventDefault();

    console.log(screenshot, comment);

    //adicionar chamada do back

    onFeedbackSent();
  }

  return (
    <>
      <header>    
        <button 
          type='button' 
          className='top-5 left-5 absolute text-[#09090A] hover:text-[#3f3f46] dark:text-zinc-400 dark:hover:text-zinc-100'          
        >
          <p className='w-4 h-4'/>
        </button>  

        <span className="text-xl leading-6 flex items-center gap-2">
        <p className='w-4 h-4'/>
          {/* <img src={WarningCircle} alt='Reportar o erro'
            className='w-6 h-6'
          />
          Erro */}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea 
          className='min-w-[304px] w-full min-h-[112px] text-sm text-zinc-900
          dark:text-white placeholder-zinc-400 dark:text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={event => setComment(event.target.value)}
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar Erro
          </button>
        </footer>
      </form>
    </>
  )
}