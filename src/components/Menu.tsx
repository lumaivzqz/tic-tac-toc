import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';

function Menu({ setFirstPlayersName, setSecondPlayersName, setMenuActive }) {
    const handleNewGame = () => {
        setMenuActive(false);
    }

    return (
        <Card className="w-96">
            <CardHeader
                className="mb-6 grid h-25 place-items-center"
            >
                <Typography type='h1'>
                    TIC TAC TOC
                </Typography>
                <Typography type='h2'>
                    New Game!
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                    <div className="mb-1 flex flex-col gap-6">
                        <input
                            placeholder="Player 1"
                            onChange={({ target }) => setFirstPlayersName(target.value)}
                            className="focus:!border-t-gray-900"                    
                        /></div>
                        <div className="mb-1 flex flex-col gap-6">
                        <input
                            placeholder="Player 2"
                            onChange={({ target }) => setSecondPlayersName(target.value)}
                            className="focus:!border-t-gray-900"                         
                        /></div>
            </CardBody>
            <CardFooter className="mt-6 pt-0 items-center justify-center">
                <div className='flex justify-center flex '>
                    <Button className="pr-4 pl-4 pt-1 pb-1 font-bold hover:bg-gray-100" onClick={handleNewGame}>
                        Start
                    </Button>
                </div>
                <div className='flex justify-center m-2'>
                    <Typography>
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </div>
            </CardFooter >
        </Card >
    )
}

export default Menu;