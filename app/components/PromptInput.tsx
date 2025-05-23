import Button from "./UI/Button";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function PromptInput({ prompt, setPrompt, isGenerating, onGenerate }: PromptInputProps) {
  const charCount = prompt.length;

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleGenerate = () => {
    if (isGenerating || !prompt) return;
    onGenerate();
  };

  const isButtonDisabled = isGenerating || !prompt;

  return (
    <div className="mb-6">
      <label htmlFor="prompt" className="block text-sm font-medium mb-2">
        Describe your artwork
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={handlePromptChange}
        className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
        placeholder="A serene landscape with mountains and a lake at sunset..."
        required
        aria-required="true"
        aria-label="Prompt for image generation"
      />
      <div className="text-sm text-gray-500 mt-1">Characters: {charCount}</div>
      <Button text={isGenerating ? "Generating..." : "Generate Art"} onClick={handleGenerate} disabled={isButtonDisabled} type="button" className="w-full mt-4 py-3" aria-busy={isGenerating} />
    </div>
  );
}
