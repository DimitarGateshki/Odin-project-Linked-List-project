import Node from "./node.js";

export default class LinkedList{
    constructor(){
        this.head=null;
    }


    prerend(x){
        let temp =null;
        if(this.head!=null)temp=this.head;
        this.head=new Node(x);
        this.head.nextNode=temp;
    }

    append(x){
        if(this.head==null)this.prerend(x);
        else{
            let temp=this.head;
            while(temp.nextNode!=null)temp=temp.nextNode;
            temp.nextNode=new Node(x);
        }
    }

    size(){
        let temp=this.head;
        let counter=0;
        while(temp != null){
            counter++;
            temp=temp.nextNode;
        }

        return counter;
    }

    head(){
        return this.head;
    }

    tail(){
        let temp=this.head;
        while(temp.nextNode!= null)temp=temp.nextNode;
        return temp;
    }

    at(index){
        let temp=this.head;
        for (let i = 0; i < index; i++) {
            temp=temp.nextNode;
            if(temp==null)return  "There is no item for this index";           
        }

        return temp;
    }

    pop(){
        let cur=this.head;
        let prev=null;
        while(cur.nextNode!=null){
            prev=cur;
            cur=cur.nextNode;
        }

        prev.nextNode=null;
    }

    contains(x){
        let temp=this.head;
        while(temp!=null){
            if(temp.value===x)return true;
            temp=temp.nextNode;
        }

        return falsel;
    }

    find(x){
        let temp=this.head;
        let index=0;
        while(temp != null){
            if(temp.value===x)return index;
            index++;
            temp=temp.nextNode;
        }
        return null;
    }

    toString(){
        let temp=this.head;
        let string="";
        while(temp!=null){
            string+=`(${temp.value}) ->`;
            temp=temp.nextNode;
        }
        return (string+="null");
    }

    insertAt(x,y){
        if(this.head==null)this.prerend(y);
        else{
            let cur=this.head;
            let prev=null;
            for (let i = 0; i < x; i++) {
                prev=cur;
                cur=cur.nextNode;
                if(cur==null)break;
            }

            const temp=new Node(y);
            prev.nextNode=temp;
            temp.nextNode=cur;
        }
    }

    removreAt(x){
        if(this.head=null)return "List is already empty";
        let cur=this.head;
        let prev=null;

        for (let i = 0; i < x; i++) {
            prev=cur;
            cur=cur.nextNode;
            if(cur==null)return "There is no item for this index";

        }

        prev.nextNode=cur.nextNode;
    }
}