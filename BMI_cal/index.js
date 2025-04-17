document.getElementById('bmiform').addEventListener('submit', function(e){
    
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinch = parseInt(document.getElementById('height-inch').value);
    const weight = parseFloat(document.getElementById('weight').value);


    if(age && gender && heightfeet && heightinch && weight){

        const HeightInMeters = ((heightfeet * 12) + heightinch) * 0.0254;         //In Meters
        const bmi = weight/ (HeightInMeters *HeightInMeters);
        const resultElement = document.getElementById("result");

        let category = '';

        if(bmi <18.5){
            category = 'Underweight';
        }else if(bmi >=18.5 && bmi < 24.9){
            category = 'Normalweight';
        }else if(bmi >= 25 && bmi <29.9){
            category = 'Overweight';
        }else{
            category = 'Obese';
        }

        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) +'<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;
    }
});

