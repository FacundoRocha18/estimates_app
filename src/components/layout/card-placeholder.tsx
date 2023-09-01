import { Button, Card, CardHeader, CardBody, CardFooter, Skeleton } from "@nextui-org/react"

export const CardPlaceholder = ({ isLoaded }: { isLoaded: boolean }) => {
	return (
		<Skeleton isLoaded={isLoaded}>
			<Card className="rounded">
				<Skeleton>
					<CardHeader className='flex-col items-start gap-1'>
					</CardHeader>
				</Skeleton>
				<Skeleton>
					<CardBody className="overflow-visible py-1 px-3">
					</CardBody>
				</Skeleton>
				<Skeleton>
					<CardFooter>
						<Button className='w-full bg-lime-500 font-medium rounded'>See report info</Button>
					</CardFooter>
				</Skeleton>
			</Card>
		</Skeleton>
	)
}