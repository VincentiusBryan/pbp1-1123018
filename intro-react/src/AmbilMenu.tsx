import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

export default function AmbilMenu() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<any[]>([]);

    const reloadPost = useCallback(async () => {
        const response = await fetch('http://localhost:5173/api/list-menu');
        if (response.status !== 200) {
            alert("Failed to reload post");
            return;
        }
        const data = await response.json();
        setPosts(data);
    }, []);

    useEffect(() => {
        reloadPost();
    }, [reloadPost]);

    return (
        <div>
            <h1>Daftar Menu</h1>
            <button>Tambah Menu</button>
            <button>Update Menu</button>
            
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.nama}</h2>
                        <p>{post.deskripsi}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}