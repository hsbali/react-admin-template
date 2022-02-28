import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { styled, useTheme } from '@mui/material/styles';
import { ButtonBase, Drawer, useMediaQuery } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ isSidebarOpen, isMobile }) => ({
    position: "absolute",
    width: '100%',
    height: `calc(100vh - 75px)`,
    overflow: 'auto',
    borderRadius: '0px',
    padding: '10px',
    top: "75px",
    paddingLeft: isSidebarOpen && !isMobile ? "310px" : "10px"
}));

export default function DashLayout({ homeRoute }) {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    useEffect(() => {
        setIsSidebarOpen(!matchDownMd)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    return (
        <>
            <header>
                <nav className={`flex gap-3 border-b-2 h-[75px] items-center px-4 fixed w-full`}>
                    <ButtonBase onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="rounded-md bg-slate-200 p-1">
                        <MenuIcon />
                    </ButtonBase>
                    <Link to={homeRoute}>
                        {/* <img src={} alt="logo" /> */}
                        <div className="text-3xl font-bold">Logo</div>
                    </Link>
                </nav>
            </header>
            <div className="flex">
                <Drawer
                    open={isSidebarOpen}
                    variant={matchUpMd ? 'persistent' : 'temporary'}
                    onClose={() => setIsSidebarOpen(!isSidebarOpen)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: "300px",
                            [theme.breakpoints.up('md')]: {
                                top: '75px',
                                borderRight: "2px solid transparent",
                                borderColor: theme.palette.grey[300],
                            }
                        }
                    }}
                    ModalProps={{ keepMounted: true }}
                >
                    working
                </Drawer>
                <Main isSidebarOpen={isSidebarOpen} isMobile={matchDownMd}>
                    <Outlet />
                </Main>
            </div>
        </>
    )
}