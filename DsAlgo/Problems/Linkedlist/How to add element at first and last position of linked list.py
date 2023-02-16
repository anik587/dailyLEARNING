# add an element at the head and tail position of a doubly linked


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def add_element_head(self, new_element):
        new_element.next = self.head
        self.head = new_element
        return

    def add_element_tail(self, new_element):
        current = self.head
        while current.next:
            current = current.next
        current.next = new_element
        return

    def get_head(self):
        return self.head

    def get_tail(self):
        current = self.head
        while current.next:
            current = current.next
        return current


e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)
e6 = Element(6)

ll = LinkedList(e1)
ll.add_element_tail(e2)
ll.add_element_tail(e3)
ll.add_element_tail(e4)
ll.add_element_tail(e5)
ll.add_element_tail(e6)

print(ll.get_head().value)
print(ll.get_tail().value)
