const SvgIcons = ({ type }) => {
	switch (type) {
		case 'arrow-left':
			return (
				<svg
					className="svg-arrow-left"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 39.5 19.64"
				>
					<g>
						<path
							fill="none"
							stroke="currentColor"
							strokeWidth="2px"
							d="M11.64,18.9,1.5,9.82,11.64.74"
						/>
						<line
							fill="none"
							stroke="currentColor"
							strokeWidth="2px"
							x1="2.21"
							y1="9.85"
							x2="39.5"
							y2="9.85"
						/>
					</g>
				</svg>
			);
		case 'arrow-right':
			return (
				<svg
					className="svg-arrow-right"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 39.5 19.64"
				>
					<g>
						<path
							fill="none"
							stroke="currentColor"
							strokeWidth="2px"
							d="M27.86,18.9,38,9.82,27.86.74"
						/>
						<line
							fill="none"
							stroke="currentColor"
							strokeWidth="2px"
							x1="37.29"
							y1="9.85"
							y2="9.85"
						/>
					</g>
				</svg>
			);
		case 'chevron-up':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="chevron-up"
				>
					<polyline points="18 15 12 9 6 15"></polyline>
				</svg>
			);
		case 'chevron-down':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					className="chevron-down"
				>
					<polygon
						points="51.5 85.657 8.672 42.828 14.328 37.172 51.5 74.343 88.672 37.172 94.328 42.828 51.5 85.657"
						fill="currentColor"
					/>
				</svg>
			);
		case 'chevron-left':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="chevron-left"
				>
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			);
		case 'chevron-right':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="chevron-right"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			);
		case 'link':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					className="icon-link"
				>
					<path
						d="M10.6352 14.6695C10.6787 14.7131 10.7133 14.7648 10.7369 14.8217C10.7605 14.8786 10.7726 14.9396 10.7726 15.0012C10.7726 15.0628 10.7605 15.1238 10.7369 15.1807C10.7133 15.2376 10.6787 15.2893 10.6352 15.3328L9.85782 16.1094C9.06652 16.9007 7.99329 17.3452 6.87422 17.3452C5.75516 17.3452 4.68193 16.9007 3.89063 16.1094C3.09933 15.3181 2.65479 14.2448 2.65479 13.1258C2.65479 12.0067 3.09933 10.9335 3.89063 10.1422L5.77422 8.25781C6.53504 7.49612 7.55827 7.05412 8.63437 7.02231C9.71048 6.99051 10.758 7.3713 11.5625 8.08671C11.6087 8.12775 11.6463 8.17748 11.6733 8.23306C11.7002 8.28864 11.7159 8.34899 11.7196 8.41065C11.7232 8.47232 11.7146 8.53409 11.6944 8.59245C11.6741 8.65081 11.6426 8.70461 11.6016 8.75078C11.5605 8.79694 11.5108 8.83458 11.4552 8.86153C11.3996 8.88847 11.3393 8.90421 11.2776 8.90784C11.216 8.91147 11.1542 8.90291 11.0958 8.88266C11.0375 8.86242 10.9837 8.83088 10.9375 8.78984C10.3118 8.23406 9.49747 7.93834 8.66098 7.96317C7.82449 7.988 7.02909 8.33151 6.43751 8.92343L4.55313 10.8047C3.93754 11.4203 3.5917 12.2552 3.5917 13.1258C3.5917 13.9964 3.93754 14.8313 4.55313 15.4469C5.16872 16.0625 6.00364 16.4083 6.87422 16.4083C7.7448 16.4083 8.57972 16.0625 9.19532 15.4469L9.97188 14.6695C10.0154 14.6259 10.0671 14.5914 10.124 14.5678C10.1809 14.5442 10.2419 14.532 10.3035 14.532C10.3651 14.532 10.4261 14.5442 10.483 14.5678C10.5399 14.5914 10.5916 14.6259 10.6352 14.6695ZM16.1094 3.88827C15.3176 3.09795 14.2445 2.65408 13.1258 2.65408C12.007 2.65408 10.934 3.09795 10.1422 3.88827L9.36485 4.66484C9.27689 4.75279 9.22748 4.87209 9.22748 4.99648C9.22748 5.12087 9.27689 5.24016 9.36485 5.32812C9.45281 5.41607 9.5721 5.46549 9.69649 5.46549C9.82088 5.46549 9.94017 5.41607 10.0281 5.32812L10.8047 4.54687C11.4203 3.93128 12.2552 3.58544 13.1258 3.58544C13.9964 3.58544 14.8313 3.93128 15.4469 4.54687C16.0625 5.16246 16.4083 5.99738 16.4083 6.86796C16.4083 7.73854 16.0625 8.57346 15.4469 9.18906L13.5625 11.0789C12.9709 11.6708 12.1755 12.0143 11.339 12.0392C10.5025 12.064 9.68816 11.7683 9.0625 11.2125C9.01634 11.1715 8.96254 11.1399 8.90418 11.1197C8.84582 11.0994 8.78405 11.0909 8.72238 11.0945C8.66072 11.0981 8.60037 11.1139 8.54479 11.1408C8.48921 11.1678 8.43948 11.2054 8.39844 11.2516C8.3574 11.2977 8.32586 11.3515 8.30561 11.4099C8.28537 11.4682 8.27681 11.53 8.28044 11.5917C8.28407 11.6533 8.29981 11.7137 8.32676 11.7693C8.3537 11.8249 8.39134 11.8746 8.4375 11.9156C9.2419 12.6306 10.2891 13.0111 11.3648 12.9793C12.4406 12.9475 13.4635 12.5058 14.2242 11.7445L16.1078 9.86015C16.5002 9.46844 16.8115 9.00325 17.0239 8.49115C17.2363 7.97906 17.3458 7.43012 17.3459 6.87571C17.346 6.3213 17.2369 5.7723 17.0247 5.26009C16.8126 4.74789 16.5015 4.28253 16.1094 3.89062V3.88827Z"
						fill="currentColor"
					/>
				</svg>
			);
		case 'menu':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="menu"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			);
		case 'close':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="close"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			);
		case 'envelope':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M2.25 3A2.25 2.25 0 0 0 .9 7.05l10.2 7.65a1.505 1.505 0 0 0 1.8 0l10.2-7.65A2.251 2.251 0 0 0 21.75 3H2.25ZM0 8.25V18c0 1.655 1.345 3 3 3h18c1.655 0 3-1.345 3-3V8.25L13.8 15.9a2.995 2.995 0 0 1-3.6 0L0 8.25Z"
						fill="currentColor"
					/>
				</svg>
			);
		case 'facebook':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"
						fill="currentColor"
					/>
				</svg>
			);
		case 'instagram':
			return (
				<svg
					className="svg-social-instagram"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 22.76 22.76"
				>
					<g>
						<path
							fill="currentColor"
							d="M22.68 16.07a6.78 6.78 0 01-1.84 4.77 6.76 6.76 0 01-4.76 1.84c-1.88.1-7.51.1-9.39 0a6.77 6.77 0 01-4.77-1.84 6.74 6.74 0 01-1.84-4.77C0 14.19 0 8.56.08 6.68a6.74 6.74 0 011.84-4.77A6.78 6.78 0 016.69.08C8.57 0 14.2 0 16.08.08a6.76 6.76 0 014.76 1.84 6.68 6.68 0 011.84 4.77c.11 1.88.11 7.5 0 9.38zm-2-4.69c0-1.66.14-5.21-.45-6.71a3.84 3.84 0 00-2.17-2.16c-1.49-.59-5.05-.46-6.71-.46s-5.21-.14-6.7.46a3.84 3.84 0 00-2.14 2.16c-.59 1.49-.45 5.05-.45 6.71s-.14 5.21.45 6.71a3.84 3.84 0 002.17 2.16c1.49.59 5.05.46 6.7.46s5.21.13 6.71-.46a3.87 3.87 0 002.17-2.16c.59-1.5.45-5.09.45-6.71zm-3.49 0a5.84 5.84 0 11-5.84-5.84 5.83 5.83 0 015.87 5.84zm-2 0a3.8 3.8 0 10-3.8 3.79 3.8 3.8 0 003.79-3.79zm2.28-4.71a1.37 1.37 0 111.36-1.36 1.36 1.36 0 01-1.37 1.36z"
						/>
					</g>
				</svg>
			);
		case 'twitter':
			return (
				<svg
					viewBox="0 0 24 20"
					className="svg-social-twitter"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.54752 19.7508C16.6042 19.7508 21.5578 12.2474 21.5578 5.74052C21.5578 5.5274 21.5578 5.31524 21.5434 5.10404C22.507 4.407 23.3389 3.54392 24 2.55524C23.1014 2.95364 22.148 3.2148 21.1718 3.32996C22.1998 2.71465 22.9692 1.74674 23.3366 0.60644C22.3701 1.18005 21.3126 1.58427 20.2099 1.80164C19.4675 1.01222 18.4856 0.489481 17.4162 0.314324C16.3468 0.139168 15.2494 0.321355 14.294 0.832693C13.3385 1.34403 12.5782 2.15601 12.1307 3.14299C11.6833 4.12996 11.5735 5.23691 11.8186 6.29252C9.8609 6.19432 7.94576 5.68555 6.19745 4.79924C4.44915 3.91294 2.90676 2.6689 1.6704 1.14788C1.04073 2.23188 0.847872 3.51511 1.1311 4.7363C1.41433 5.9575 2.15234 7.02483 3.19488 7.721C2.41123 7.69804 1.64465 7.48663 0.96 7.10468V7.16708C0.960311 8.30393 1.35385 9.40568 2.07387 10.2854C2.79389 11.1652 3.79606 11.7689 4.9104 11.994C4.18548 12.1917 3.42487 12.2206 2.68704 12.0784C3.00181 13.0568 3.61443 13.9123 4.43924 14.5254C5.26405 15.1385 6.25983 15.4785 7.28736 15.498C6.26644 16.3004 5.09731 16.8938 3.84687 17.244C2.59643 17.5942 1.28921 17.6944 0 17.5389C2.25183 18.9839 4.87192 19.7504 7.54752 19.7469"
						fill="currentColor"
					/>
				</svg>
			);
		case 'linkedin':
			return (
				<svg
					viewBox="0 0 20 20"
					className="svg-social-linkedin"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z"
						fill="currentColor"
					/>
				</svg>
			);
		case 'github':
			return (
				<svg
					className="svg-social-github"
					viewBox="0 0 20 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.8786 0.76416C4.68043 0.76416 0.470154 5.26315 0.470154 10.8178C0.470154 15.2665 3.16332 19.024 6.90318 20.3562C7.3736 20.4441 7.55001 20.1425 7.55001 19.8786C7.55001 19.6398 7.53825 18.8481 7.53825 18.0061C5.17438 18.4711 4.56283 17.3903 4.37466 16.8248C4.26881 16.5358 3.81015 15.6435 3.41029 15.4047C3.081 15.2162 2.61058 14.7513 3.39853 14.7387C4.13945 14.7261 4.66867 15.4676 4.84508 15.7692C5.69184 17.2898 7.04431 16.8625 7.58529 16.5986C7.66762 15.9451 7.91459 15.5053 8.18508 15.2539C6.0917 15.0026 3.90424 14.1355 3.90424 10.29C3.90424 9.19663 4.26881 8.29181 4.8686 7.58805C4.77452 7.33671 4.44522 6.30622 4.96269 4.92385C4.96269 4.92385 5.75064 4.65994 7.55001 5.95434C8.30269 5.72813 9.1024 5.61503 9.90212 5.61503C10.7018 5.61503 11.5016 5.72813 12.2542 5.95434C14.0536 4.64737 14.8416 4.92385 14.8416 4.92385C15.359 6.30622 15.0297 7.33671 14.9356 7.58805C15.5354 8.29181 15.9 9.18407 15.9 10.29C15.9 14.148 13.7008 15.0026 11.6074 15.2539C11.9485 15.5681 12.2425 16.1713 12.2425 17.1139C12.2425 18.4585 12.2307 19.5393 12.2307 19.8786C12.2307 20.1425 12.4071 20.4567 12.8775 20.3562C16.5939 19.024 19.287 15.2539 19.287 10.8178C19.287 5.26315 15.0768 0.76416 9.8786 0.76416Z"
						fill="currentColor"
					/>
				</svg>
			);
		case 'youtube':
			return (
				<svg
					className="svg-social-youtube"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24.94 17.54"
				>
					<path
						fill="currentColor"
						d="M24.69,3.79a5.38,5.38,0,0,0-1-2.48A3.6,3.6,0,0,0,21.2.25C17.71,0,12.48,0,12.48,0h0S7.23,0,3.74.25a3.6,3.6,0,0,0-2.5,1.06,5.38,5.38,0,0,0-1,2.48,37.63,37.63,0,0,0-.25,4V9.71a37.7,37.7,0,0,0,.25,4,5.38,5.38,0,0,0,1,2.48A4.21,4.21,0,0,0,4,17.29c2,.19,8.48.25,8.48.25s5.24,0,8.73-.26a3.53,3.53,0,0,0,2.5-1.05,5.38,5.38,0,0,0,1-2.48,37.45,37.45,0,0,0,.25-4V7.82A37.63,37.63,0,0,0,24.69,3.79ZM9.89,12V5l6.74,3.52Z"
					/>
				</svg>
			);
		case 'spotify':
			return (
				<svg
					className="svg-social-spotify"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 167.49 167.48"
				>
					<path
						fill="currentColor"
						d="M83.74,0a83.74,83.74,0,1,0,83.75,83.74A83.74,83.74,0,0,0,83.74,0Zm38.41,120.78a5.22,5.22,0,0,1-7.18,1.73c-19.67-12-44.42-14.73-73.57-8.07a5.22,5.22,0,0,1-2.32-10.18C71,97,98.34,100.11,120.42,113.6A5.22,5.22,0,0,1,122.15,120.78ZM132.4,98a6.52,6.52,0,0,1-9,2.16C100.91,86.29,66.59,82.28,40,90.37a6.53,6.53,0,1,1-3.8-12.5C66.59,68.65,104.4,73.11,130.25,89a6.53,6.53,0,0,1,2.15,9Zm.88-23.74c-27-16-71.52-17.5-97.29-9.68a7.83,7.83,0,1,1-4.55-15c29.58-9,78.76-7.25,109.83,11.2a7.83,7.83,0,0,1-8,13.47Z"
					/>
				</svg>
			);
		case 'tiktok':
			return (
				<svg
					className="svg-social-tiktok"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 13.9 16"
				>
					<g>
						<path
							fill="currentColor"
							d="M7.3,0H9.91a4.16,4.16,0,0,0,1.16,2.78A4.69,4.69,0,0,0,13.9,4V6.66A7,7,0,0,1,11.1,6,7.73,7.73,0,0,1,10,5.39c0,2,0,3.9,0,5.84a5.12,5.12,0,0,1-.9,2.62A5,5,0,0,1,5.17,16a4.78,4.78,0,0,1-2.72-.68A5,5,0,0,1,0,11.5c0-.33,0-.67,0-1A5,5,0,0,1,5.83,6.05c0,1,0,2,0,3a2.34,2.34,0,0,0-2,.25,2.31,2.31,0,0,0-.91,1.17,2.57,2.57,0,0,0-.09,1.07,2.27,2.27,0,0,0,2.33,1.91A2.23,2.23,0,0,0,7,12.34a1.67,1.67,0,0,0,.27-.71c.07-1.19,0-2.38,0-3.57C7.29,5.37,7.28,2.69,7.3,0Z"
						/>
					</g>
				</svg>
			);
	}
};

export default SvgIcons;
