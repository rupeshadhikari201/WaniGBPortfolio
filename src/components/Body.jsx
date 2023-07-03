import Typewriter from "typewriter-effect";
import "../index.css";

const Body = () => {
	return (
		<div className="container">
			<div className="twothird">
				<div className="imageandname">
					<img
						src="\src\assets\Image.png"
						alt="Avatar"
					></img>
					<div className="aboutme">
						<h1>About Me</h1>
						<div className="type">
							<h2> I am a </h2>
							{/* <Typewriter
						onInit={typewriter => {
							typewriter
								.typeString("Comedian")
								.pauseFor(2000)
								.deleteAll()
								.typeString("Youtuber")
								.pauseFor(2000)
								.deleteAll()
								.typeString("Script Writer")
								.pauseFor(2000)
								.deleteAll()
								.typeString("Actor")
								.pauseFor(2000)
								.deleteAll()
								.start();
								
						}}
						autoStart= true;
					/> */}
							<Typewriter
								options={{
									strings: [
										"Youtuber",
										"Content Creator",

										"Scriptwriter",
										"Comedian",
										"Actor",
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
					</div>
				</div>
				<div className="tags">
					<span>Content Creator</span>
					<span>Actor</span>
					<br />
					<span>Scriptwriter</span>
					<span>Comedy </span>
					<br />
					<span>Youtuber</span>
				</div>
			</div>
			<div className="onethird">
				<h1> Follow Me</h1>
				<div className="socials">
					<a href="">
						<img
							src="src\assets\Facebook.png"
							alt="Follow us on Facebook"
						></img>
					</a>
					<a href="">
						<img
							src="src\assets\Instagram.png"
							alt="Follow us on Facebook"
						></img>
					</a>
					<a href="">
						<img
							src="src\assets\TikTok.png"
							alt="Follow us on Facebook"
						></img>
					</a>
					<a href="">
						<img
							src="src\assets\Youtube.png"
							alt="Follow us on Facebook"
						></img>
					</a>
					<a href="">
						<img
							src="src\assets\Twitter.png"
							alt="Follow us on Facebook"
						></img>
					</a>
					<a href="">
						<img
							src="src\assets\Gmail.png"
							alt="Follow us on Facebook"
						></img>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Body;
