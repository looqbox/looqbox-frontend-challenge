import { Flex } from "antd"
import { Link, Outlet } from "react-router-dom"

import PokeLogo from "../../../assets/icons/PokeLogo";

export default function DefaultLayout() {
    return (
        <>
            <header style={{paddingTop: 48}}>
                <Flex justify="center" align="center">
                    <Link to="/"><PokeLogo /></Link>
                </Flex>
            </header>
            <Outlet />
        </>
    )
}