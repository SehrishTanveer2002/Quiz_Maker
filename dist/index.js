document.addEventListener('DOMContentLoaded', () => {
    const addNewQuestionBtn = document.getElementById('add-newquestion-btn');
    const saveBtn = document.getElementById('save-btn');
    const newQuizBtn = document.getElementById('new-Quiz-btn');
    const previewBtn = document.getElementById('preview-btn');
    const printBtn = document.getElementById('print-btn');
    const questionForm = document.getElementById('question-form');
    
    let questions = [];

    addNewQuestionBtn.addEventListener('click', () => {
        const newQuestionForm = questionForm.cloneNode(true);
        const inputs = newQuestionForm.querySelectorAll('input[type=text]');
        inputs.forEach(input => {
            input.value = '';
        });
        document.body.appendChild(newQuestionForm);
    });

    saveBtn.addEventListener('click', () => {
        const allForms = document.querySelectorAll('#question-form');
        questions = [];
        
        allForms.forEach(form => {
            const question = form.querySelector('#question').value;
            const options = [
                form.querySelector('#option1').value,
                form.querySelector('#option2').value,
                form.querySelector('#option3').value,
                form.querySelector('#option4').value
            ];
            const correctAnswer = form.querySelector('#correct-answer').value;

            if (question && options.every(opt => opt) && correctAnswer) {
                questions.push({
                    question,
                    options,
                    correctAnswer
                });
            }
        });

        if (questions.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        alert('Questions saved successfully!');
        clearForms();
    });

    newQuizBtn.addEventListener('click', () => {
        const allForms = document.querySelectorAll('#question-form');
        allForms.forEach((form, index) => {
            if (index > 0) {
                form.remove();
            }
        });
        clearForms();
        questions = [];
        alert('New quiz created!');
    });

    previewBtn.addEventListener('click', () => {
        if (questions.length === 0) {
            alert('No questions to preview.');
            return;
        }

        let previewContent = '<h2>Quiz Preview</h2>';
        questions.forEach((q, index) => {
            previewContent += `<h3>Question ${index + 1}: ${q.question}</h3>`;
            q.options.forEach((opt, i) => {
                previewContent += `<p>Option ${i + 1}: ${opt}</p>`;
            });
            previewContent += `<p>Correct Answer: Option ${q.correctAnswer}</p>`;
        });

        const previewWindow = window.open('', '_blank', 'width=600,height=400');
        previewWindow.document.open();
        previewWindow.document.write(`<html><head><title>Quiz Preview</title></head><body>${previewContent}</body></html>`);
        previewWindow.document.close();
    });

    printBtn.addEventListener('click', () => {
        if (questions.length === 0) {
            alert('No questions to print.');
            return;
        }

        let printContent = '<h2>Quiz Print</h2>';
        questions.forEach((q, index) => {
            printContent += `<h3>Question ${index + 1}: ${q.question}</h3>`;
            q.options.forEach((opt, i) => {
                printContent += `<p>Option ${i + 1}: ${opt}</p>`;
            });
            printContent += `<p>Correct Answer: Option ${q.correctAnswer}</p>`;
        });

        const printWindow = window.open('', '_blank');
        printWindow.document.open();
        printWindow.document.write(`<html><head><title>Quiz Print</title></head><body>${printContent}</body></html>`);
        printWindow.document.close();
        printWindow.print();
    });

    function clearForms() {
        const allForms = document.querySelectorAll('#question-form');
        allForms.forEach(form => {
            form.querySelector('#question').value = '';
            form.querySelector('#option1').value = '';
            form.querySelector('#option2').value = '';
            form.querySelector('#option3').value = '';
            form.querySelector('#option4').value = '';
            form.querySelector('#correct-answer').value = '';
        });
    }
});

