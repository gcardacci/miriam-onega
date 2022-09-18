import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

const bookList = [{
	description: 'Mi libro',
	image: 'ser-resiliente.png',
	pageName: 'ser-resiliente'
}]

export default function Books() {
	function renderBookList() {
		return bookList.map((b, index) => {
			const {
				description, image, pageName
			} = b;

			return (
				<Link
					href={`/books/${pageName}`}
					key={index}
				>
					<Card sx={{
						margin: 3,
						maxWidth: 345,
						minWidth: 300
					}}>
						<CardActionArea>
							<CardMedia
								alt='Book image'
								component='img'
								height='140'
								image={`books/${image}`}
							/>

							<CardContent>
								<Typography
									color='text.secondary'
									variant='body2'
								>
									{description}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
			)
		})
	}

	return (
		<div className='page'>
			<div className='page-title'>
				Libros
			</div>

			<div className='page-grid'>
				{renderBookList()}
			</div>
		</div>
	)
}
