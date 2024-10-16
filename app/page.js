'use client';

import {useState, useEffect} from "react";
import {Box, Stack, Typography, Button, Modal, TextField} from "@mui/material";
import {firestore} from "@/app/firebase";
import {collection, doc, getDocs, query, setDoc, deleteDoc, getDoc} from 'firebase/firestore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
};


export default function Home() {
    const [inventory, setInventory] = useState([]);
    const [open, setOpen] = useState(false);
    const [itemName, setItemName] = useState('');

    //Update Inventory function
    const updateInventory = async () => {
        const snapshot = query(collection(firestore, 'inventory'));
        const docs = await getDocs(snapshot);
        const inventoryList = [];
        docs.forEach((doc) => {
            inventoryList.push({name: doc.id, ...doc.data()});
            setInventory(inventoryList);
        });
    };
    useEffect(() => {
        updateInventory();
    }, []);

    //Add Inventory Function
    const addItem = async (item) => {
        const docRef = doc(collection(firestore, 'inventory'), item);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const {quantity} = docSnap.data();
            await setDoc(docRef, {quantity: quantity + 1})
        }
        else {
            await setDoc (docRef, {quantity: 1})
        }
        await updateInventory()
    };

    return (
        <Box>
            <Typography variant="h1">Inventory Management</Typography>
        </Box>
    );
}


