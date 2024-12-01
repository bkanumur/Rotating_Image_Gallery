Interactive Rotating Image Gallery

An engaging and visually captivating 3D rotating image gallery built with HTML, CSS, and JavaScript. This gallery features high-quality images with smooth animations, hover effects, and intuitive navigation buttons to create an immersive user experience.

Features

	•	3D Rotation: A stunning carousel effect using CSS transform and perspective.
	•	High-Quality Images: Images are rendered with sharp clarity for optimal viewing.
	•	Interactive Buttons: Intuitive Prev and Next buttons for easy navigation.
	•	Auto-Rotate: Automatically rotates images every 3 seconds.
	•	Hover Effects: Images zoom and glow when hovered over.
	•	Responsive Design: Works seamlessly on all screen sizes and devices.
	•	Custom Background: An elegant radial gradient background enhances the visual appeal.

Technologies Used

	•	HTML5: For the structure of the gallery.
	•	CSS3: For styling, animations, and hover effects.
	•	JavaScript (ES6): For dynamic rotation and interaction handling.

How to Use

	1.	Clone the repository:

git clone https://github.com/your-username/rotating-image-gallery.git


	2.	Navigate to the project folder:

cd rotating-image-gallery


	3.	Open index.html in a browser to view the gallery.

File Structure

.
├── index.html   # Main HTML structure
├── style.css    # Styling and animations
├── index.js     # JavaScript logic for interactivity
└── README.md    # Project documentation

Customization

Add Your Images

	1.	Replace the image URLs in the index.html file inside the <span> tags:

<span style="--i: 1"><img src="your-image-url" alt="Your Alt Text" /></span>



Adjust Rotation Speed

	•	Change the rotation interval in the index.js file:

setTimeout(() => {
  rotation -= 45; // Rotation angle
  updateGallery();
}, 3000); // Change 3000 to your desired interval (in milliseconds)



Modify Background

	•	Customize the background gradient in style.css:

.background {
  background: radial-gradient(circle, rgba(43,50,178,1) 0%, rgba(89,125,206,1) 50%, rgba(45,45,118,1) 100%);
}

Screenshots

Desktop View:

Mobile View:

Future Enhancements

	•	Add support for infinite scrolling.
	•	Include dynamic image loading from an API.
	•	Add touch gestures for mobile devices.

Contributing

Feel free to contribute by opening a pull request or submitting an issue. Suggestions for improvements are always welcome!

License

This project is licensed under the MIT License. You are free to use, modify, and distribute the project.

Acknowledgements

	•	Picsum for sample images.
	•	Inspiration from modern 3D carousel designs.

Enjoy the interactive rotating image gallery! 🎉
