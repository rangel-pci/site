import styled, { css, keyframes } from 'styled-components';

export const Header = styled.header`
	background: #000;
	padding: 0 24px;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;

	z-index: 100;

	@media(min-width: 800px) {
    	button{
    		display: none;
    	}

    	height: 75.5px;

    	nav{
    		position: initial;
    	
			width: 100%;		

			padding: 0;

			border-radius: 0 0 0 5px;

			ul{
				height: 75.5px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
			li{
				text-align: center;
				margin: 0 14px;
				border-bottom: 0;
			}
			a{
				padding: 8px;
				color: #00E963;
				display: block;
			}

			a:hover{
				border-bottom: 2px solid #00E963;
			}
    	}
  	}
`;


export const Wrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	margin: 0 auto;
	
	max-width: 1200px;
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	
	max-width: 1200px;
`;

export const ToggleMenu = styled.button`
	display: flex;
	flex-direction: column;

	background: #000;
	border: none;

	padding: 14px 0;
	margin: 14px 0;

	div{
		width: 30px;
		background: #00E963;
		height: 2.5px;

		margin: 2px 10px;

		border-radius: 50px;

		transition: 0.5s all;
	}

	${
		props => props.on && css 
		`
			div:nth-child(3){
				background: #000;
			}
			div:nth-child(1){
				transform: rotate(45deg);
			}
			div:nth-child(2){
				transform: rotate(-45deg);
			}
		`
	}
`;

export const Nav = styled.nav`
	background: #000;

	position: fixed;
	top: 75px;
	right: -70%;

	width: 70%;

	display: flex;
	justify-content: center;

	padding: 24px 0;

	border-radius: 0 0 0 5px;

	z-index: 99;

	transition: 0.5s all;

	nav{
		width: 100%;
	}
	ul{
		list-style: none;
		width: 100%;
	}
	li{
		text-align: center;
		margin: 14px;
		border-bottom: 1px solid #4f4f4f;
	}
	a{
		padding: 8px;
		color: #00E963;
		display: block;
	}

	${
		props => props.on && css 
		`
			right: 0;
		`
	}
`;

export const Logo = styled.a`
	color: #00E963;
`;

export const Main = styled.main`
	width: 100%;a
`;

// About me
export const About = styled.section`
	padding-top: 75.5px;

	color: #fff;

	height: calc(100vh);
	overflow: hidden;
	
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	padding: 0 24px;

	border-radius: 0 0 50px 50px;

	h1{
		font-size: 32px;
		background: #00E963;
		border-radius: 50px;
		padding: 8px 0;
		text-align: center;
	}
	p{
		font-size: 21px;
		margin-top: 24px;
		margin-bottom: 80px;
		
	}

	:before{
		content: " ";
		position: absolute;
		top: 75.5px;
		left: 0;

		width: 100%;
		height: 100%;

		background-color: #000;
		background-image: url(${props => props.imageUrl});
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;

		z-index: -2;
	}

	:after{
		content: " ";
		position: absolute;
		top: 75.5px;
		left: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(to bottom, #00E963, #EA00D9);
		opacity: 0.6;

		z-index: -1;
	}

	.perfil-img{
		display: none;
	}

	@media(min-width: 800px) {
		.perfil-img{
			display: block;
			width: 200px;
			height: 200px;

			
			z-index: 1;

			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 100%;
			}

			position: relative;
		}

		.perfil-img::before{
			content: "";
			width: 206px;
			height: 206px;

			border-radius: 100%;

			position: absolute;
			top: -3px;
			left: -3px;

			z-index: -1;

			background: linear-gradient(to left, #00E963, #21B6E5);
		}

		.grid{
			display: grid;
			grid-template-columns: 250px auto;
			grid-template-rows: auto;
		}

		:before{
			content: none;
		}

		:after{
			background: #000;
			opacity: 1;
		}

		span{
			font-size: 22px;
		}

		display: flex;
		flex-direction: column;
		justify-content: center;

		border-radius: 0;

		h1{
			display: inline-block;
			padding: 8px 48px;
			background: #00E963;
		}
		p{
			max-width: 600px;
			margin-bottom: 0;
		}
	}	
`;

export const Skill = styled.section`
	background: #fff;

	min-height: 100vh;
	overflow: hidden;

	padding: 0 24px;

	text-align: center;
	color: #4f4f4f;

	padding-top: 75.5px;

	h2{
		margin-top: 24px;
	}
	p{
		font-size: 18px;
		margin: 14px 0;
	}

	.flex-c{
		min-height: calc(100vh - 75.5px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const Blocks = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	margin: 14px 0;

	div{
		font-size: 21px;
		color: #4f4f4f;
		background: #fff;

		border: 1px solid #f1f1f1;
		border-radius: 5px;
		box-shadow: 0px 2px 25px -16px rgba(0, 0, 0, 0.5);
		
		padding: 8px 24px;
		margin: 2px 2px;
	}
`;

const Fade = keyframes`
	0% { transform: translateY(0);}
	50% { transform: translateY(5px);}
	100% { transform: translateY(0);}
`;

export const FloatingBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img{
		margin-right: 8px;
	}
    span{
    	border: none;
    	box-shadow: none;
    }

    animation: ${Fade} ${props => props.time}s linear infinite;
`;

export const Project = styled.section`
	background: #000;

	min-height: 100vh;

	overflow: hidden;

	padding: 0 24px;

	text-align: center;
	color: #f1f1f1;

	padding-top: 75.5px;
	padding-bottom: 8px;

	h2{
		margin-top: 24px;
	}
	p{
		font-size: 18px;
		margin: 14px 0;
	}
`;

export const FlexGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-template-rows: repeat(auto-fill, 1fr);
	grid-gap: 14px;

	overflow: hidden;

	button{
		width: 100%;
		cursor: pointer;

		background: none;
		border: none;
		color: #fff;

		overflow: hidden;
		position: relative;

		transition: 0.5s all;
	}
	button img{
		width: 100%;
		transition: 0.5s all;
	}

	button::after{
		content: "";
		width: 100%;
		height: 100%;

		position: absolute;
		bottom: 100%;
		right: 0;

		z-index: 1;

		background: linear-gradient(-45deg, #00E963, #21B6E5);
		opacity: 0.7;

		transition: 0.5s all;
	}

	.projectTitle{
		position: absolute;
		bottom: -50%;
		left: 50%;


		transform: translateX(-50%);

		width: 80%;

		z-index: 2;

		background: #fff;

		padding: 8px 14px;
		color: #4f4f4f;
		font-size: 16px;

		border-radius: 10px;

		transition: 0.5s all;

		img{
			width: 15px !important;
			transform: scale(1) !important;
			margin-top: auto;
		}

		transition: 0.5s all;
	}

	button:hover{
		border-radius: 10px;
	}

	button:hover:after{
		bottom: 0;
	
		border-radius: 10px;
	}	

	button:hover img{
		transform: scale(1.5);
	}

	button:hover .projectTitle{
		bottom: 40%;
	}
`;

export const Contact = styled.section`
	background: rgba(255,255,255, 0.95);

	overflow: hidden;

	padding: 80px 24px;

	text-align: center;
	color: #4f4f4f;

	min-height: 400px;

	h2{
		margin-top: 24px;
	}
	p{
		font-size: 18px;
		margin: 14px 0;
	}

	position: relative;

	:before{
		content: "";

		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background-image: url(${props => props.imageUrl});
		background-repeat: no-repeat;
		background-position: bottom;
		background-size: cover;

		z-index: -1;
	}

	@media(min-width: 800px) {
		min-height: 100vh;
		p{
			margin-bottom: 48px;
		}
	}
`;

export const Footer = styled.footer`
	background: #000;

	overflow: hidden;

	text-align: center;
	color: #f1f1f1;

	p{
		font-size: 13px;
		margin: 1px 0;
	}
`;

const showModal = keyframes`
	0% { transform: translateX(-100%);}
	50% { transform: translateX(-10%);}
	100% { transform: translateX(0);}
`;

const hideModal = keyframes`
	0% { transform: translateX(0);}
	50% { transform: translateX(-10%);}
	100% { transform: translateX(-100%);}
`;

export const ProjectModal = styled.span`
	display: ${props => props.display};
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height 100%;

	overflow-y: scroll;

	padding: 0 24px;
	padding-bottom: 60px;

	background: #171717;

	z-index: 100;

	color: #f1f1f1;

	.header{
		padding: 14px 0;
	}

	h2{
		font-size: 24px;
		text-align: center;
	}

	hr{
		width: 200px;
		margin: 8px auto;
		background: #fff;
	}

	.content p{
		padding-top: 24px;
		font-size: 18px;
	}

	.return{
		position: fixed;
		bottom: 0;
		left: 0;

		width: 100%;

		display: flex;
		justify-content: center;
		font-size: 18px;
		font-weigth: 600;
		color: #f1f1f1;

		padding: 14px 0;
		border: none;
		background: #171717;

		box-shadow: 0 0 5px rgba(0,0,0,0.25);
	}

	.return img{
		margin-right: 8px;
	}

	${
		props => props.action === 'show' && css 
		`
    		animation: ${showModal} 0.5s linear;
		`
	}
	${
		props => props.action === 'hide' && css 
		`
    		animation: ${hideModal} 0.5s linear;
		`
	}
`;

export const Highlight = styled.span`
	color: #00E963;
`;

export const Highlight2 = styled.span`
	color: #21B6E5;
`;