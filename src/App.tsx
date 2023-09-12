import {FileVideo, Github, Upload, Wand2} from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className=' min-h-screen flex flex-col'>
      <div className=" font-bold px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl">upload.ai</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Desenvolvido com no NLW da Rocketseat</span>
            <Separator orientation='vertical' className='h-6'/>
            <Button variant={"outline"}>
              <Github className='w-4 h-4 mr-2'/>
              Github
            </Button>
          </div>
      </div>
      <main className=' flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea className='resize-none p-4 leading-relaxed' placeholder='Inclua o prompt para a IA ...'/>
            <Textarea className='resize-none p-4 leading-relaxed' placeholder='Resultado gerado pela IA ... ' readOnly/>

          </div>
          <p className='text-sm text-muted-foreground'>
            Lembre-se voce pode usar a variavel <code className='text-violet-400'> {'{transcription}'} </code> no seu prompt para adcicionar a o conteudo da transcrição do video selecionado 
          </p>
        </div>
        <aside className='w-80 space-y-6'> 
          <form className='space-y-6'>
            <label className=' hover:bg-primary/5 text-muted-foreground items-center justify-center flex-col gap-2 border flex rounded-md aspect-video cursor-pointer border-dashed text-sm' htmlFor='video'>
              <FileVideo className='w-4 h-4'/>
              Selecione um video
            </label>
            <input type='file' id='video' accept='video/mp4' className='sr-only'/>
            <Separator/>
            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea 
                className='h-20 leading-relaxed resize-none' 
                id='transcription_prompt'
                placeholder='Inclua palavras-chave mencionada no vídeo separadas por virgulas'
              /> 
            </div>
            <Button type='submit' className='w-full'> 
              Carregar video
              <Upload className='w-4 h-4 ml-2'/>
            </Button>
          </form>
          <Separator/>
          <form className=' space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do Youtube</SelectItem>
                  <SelectItem value='description'>Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k </SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>Voce poderá customizar essa opção em breve</span>
            </div>
            <Separator/>
            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider 
              min={0}
              max={1}
              step={0.1}
              
              />
              <span className=' leading-relaxed block text-xs text-muted-foreground italic'>Valores mais altos tendem a deixar o resulrado mais craitivo e com possiveis erros </span>
            </div>
            <Separator/>
            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2' />
            </Button>

          </form>

        </aside>
      </main>
   </div>
  )
}

