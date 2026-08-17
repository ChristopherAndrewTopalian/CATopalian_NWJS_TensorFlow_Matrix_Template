// runMath.js

// We wrap our logic in an async function so we can use 'await'
async function runMath()
{
    try
    {
        // Wait for TensorFlow to find the GPU and boot up
        await tf.ready();

        // Now it is safe to check the backend
        ge('output').innerHTML += "Active Backend: " + tf.getBackend().toUpperCase() + "<br><br>";

        // Create the 2D Matrix
        let matrix = tf.tensor2d([
            [1, 2, 3],
            [4, 5, 6]
        ]);

        ge('output').innerHTML += "Original Matrix created." + "<br><br>";

        // Multiply it by 10 (Strictly cast 10 as a Scalar)
        let multiplied = matrix.mul(tf.scalar(10));

        // Extract and print the result
        let resultData = multiplied.dataSync();

        ge('output').innerHTML += resultData + "<br>";

    }
    catch (error)
    {
        ge('output').innerHTML += "Error: " + error.message;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting

