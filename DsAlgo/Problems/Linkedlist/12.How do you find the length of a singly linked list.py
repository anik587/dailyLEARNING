# How do you find the length of a singly linked list

class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, value) -> None:
        self.head = value
    
    def append(self, new_value):
        if self.head:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_value
        else:
            self.head = new_value
    
    def get_length(self):
        current = self.head
        count = 1
        while current.next:
            current = current.next
            count += 1
        return count

e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)
e6 = Element(6)
e7 = Element(7)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)
ll.append(e5)
ll.append(e6)
ll.append(e7)

ll.get_length()