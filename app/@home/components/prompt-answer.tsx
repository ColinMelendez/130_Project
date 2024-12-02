"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import {Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
const PromptAnswerButton = ({
}: {
}) => {

	const promptAnswerRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async () => {
		const promptAnswer = promptAnswerRef.current;

		if (promptAnswer && promptAnswer.value.trim() === "") {
			// Prompt answer is empty
			return;
		}


		// Call the mock function with the value of the input
		if (promptAnswer) {
			try {
				const response = await fetch( `join-group/${promptAnswer}`, 
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						id: promptAnswer,
					}),
				});
			}catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Answer Prompt</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">Answer the prompt:</DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Answer the prompt to join the group.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Input
                  id="promptAnswer"
                  name="promptAnswer"
                  placeholder="Prompt Answer"
                  className="mt-1 block w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full px-6 py-2 rounded-lg "
              >
                Confirm
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      );
    };
}

export default PromptAnswerButton;
