import { useParams } from "react-router";
import { useEffect, useState } from "react";

type Menu = {
    id: String;
    nama: String;
    deskripsi: String;
    harga: String;
    size: String;
    label: String;
    kategori: String;
}

export default function MenuDetail() {
    const { id } = useParams();
    const [menu, setMenu] = useState<Menu>();

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch(`https://kuis1-pbp.hansyulian.space/api/list-menu/${id}`);
            const data = await response.json();
            setMenu(data);
        };
        fetchMenu();
    }, [id]);

    return (
        <div>
            <h1>{menu?.nama}</h1>
            <p>{menu?.deskripsi}</p>
        </div>
    );
}