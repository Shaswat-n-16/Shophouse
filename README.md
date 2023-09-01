<strong><h1>ShopHouse  - MERN Stack eCommerce Website</h1></strong>

<p>Welcome to ShopHouse , your one-stop destination for high-quality perfumes. ShopHouse is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) eCommerce website designed to provide an exceptional online shopping experience for perfume enthusiasts. This README.md file provides essential information for developers, administrators, and users to get started with the website.</p>

<strong>
<h3>Table of Contents</h3>
<ul><li>Features</li>
<li>Technologies Used</li>
<li>Installation</li>
<li>Configuration</li>
<li>Usage</li>
<li>Contributing</li>
<li>License</li>
</ul>
</strong>

<h2>Features</h2>
<p>ShopHouse Perfumes offers a wide range of features for both administrators and customers:</p>

<h3>For Customers</h3>
<ol>
<li>Browse Perfume Collection: Customers can browse an extensive collection of perfumes categorized by brand, fragrance type, and price range.</li>
<li>Search and Filter: Efficient search functionality and filters to help customers find their desired products quickly.</li>
<li>Product Details: Detailed product descriptions, images, and reviews for each perfume.</li>
<li>User Authentication: Secure user registration and login for a personalized shopping experience.</li>
<li>Shopping Cart: Add products to the cart, view the cart, and proceed to checkout.</li>
<li>Responsive Design: The website is fully responsive, ensuring a seamless experience on both desktop and mobile devices.</li>
 </ol>

 
<h2>For Administrators</h2>
<ol>
<li>Product Management: Easily add, update, or remove products from the inventory.</li>
<li>Content Management: Update static pages like About Us and Contact Us.</li>
</ol>

<h2>Technologies Used</h2>
<p>ShopHouse Perfumes is built using the following technologies:</p>
<ul>
<li>MongoDB: Database for storing product, user, and order data.</li>
 <li>Express.js: Backend framework for creating RESTful APIs.</li>
<li>React.js: Frontend library for building the user interface.</li>
<li>Node.js: Server-side runtime environment.</li>
<li>JWT Authentication: Secure user authentication using JSON Web Tokens.</li>
<li>Mongoose: MongoDB object modeling for Node.js.</li>
<li>Axios: HTTP client for making API requests.</li>
<li>Bcrypt: Password hashing for user security.</li>
	
</ul>
<h2>Installation</h2>
<p>Follow these steps to set up a development environment and run ShopHouse Perfumes locally:</p>
<dl>
	<dt>Clone the repository:</dt>
	<dd>git clone https://github.com/Shaswat-n-16/Shophouse.git</dd>
	<dt>Navigate to the project directory:</dt>
	<dd>cd shophouse</dd>
	<dt>Install the server dependencies:</dt>
	<dd>cd server</dd>
	<dd>npm install</dd>
	<dt>Install the client dependencies:</dt>
	<dd>cd ../client</dd>
	<dd>npm install</dd>
</dl>



<h2>Configuration</h2>
<p>Before running the application, you need to configure certain settings:</p>
<dl>
<dt>Database Configuration:</dt>

<dd>Create a MongoDB database and update the connection string in the server/utils/db.util.js file.</dd>
<dt>JWT Secret Key:</dt>

<dd>Generate a secret key for JWT token signing and update it in the server/utils/auth.util.js file.</dd>

<dt>Environment Variables:</dt>

<dd>Create a .env file in the server directory and add the necessary environment variables.</dd>

</dl>
<h2>Usage</h2>
<ol>
	<li>Start the server</li>
	<p>cd server</p>
	<p>npm start server</p>
	<li>Start the client</li>
	<p>cd ../client</p>
	<p>npm start</p>
	<li>Access the application in your web browser at http://localhost:3000.</li>
</ol>
<br>
<p>Thank you for choosing ShopHouse Perfumes. If you have any questions or need assistance, please contact us at <u>shaswat16nandan@gmail.com</u>. Happy shopping!</p>
