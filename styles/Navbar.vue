<style lang='scss' scoped>
	#-wrap {
		position: fixed;
		width: 100%;
		z-index: 9999;

		# {
			display: flex;
			padding: 15px;
			justify-content: space-between;
			background-color: #a34c01;

			h2 {
				margin: 0 1rem 0 0;
				color: white;
				cursor: pointer;
			}

			& > div {
				display: flex;
				flex-grow: 2;
				justify-content: flex-end;

				input {
					width: 20%;
					border: none;
					height: 25px;
					border-radius: 10px;
					box-sizing: border-box;
					outline: none;
					padding: 5px;
				}
			}
		}
	}
</style>