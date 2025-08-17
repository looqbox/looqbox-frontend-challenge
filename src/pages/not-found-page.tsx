import { Button, Result } from "antd"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
    <div className="py-20">
        <Result
            status="404"
            title="404"
            subTitle="Desculpe, a página que você visitou não existe."
            extra={
                <Link to="/">
                    <Button type="primary">Página Inicial</Button>
                </Link>
            }
        />
    </div>
)

export default NotFoundPage