import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

            const data = genres.map((genre) => {
                const value = events.filter((event) =>
                    event.summary.split(" ").includes(genre)
                ).length;
                return { name: genre, value };
            });
            return data;
        };
        setData(() => getData());
    }, [events]);

    return (
        <ResponsiveContainer className="EventGenre__pie-chart" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={165}
                    fill="hsl(190, 100%, 70%)"
                    stroke="black"
                    dataKey="value"
                    label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                    }
                ></Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenre;