# Given two numbers represented by two linked lists, write a function that returns the sum of the two linked lists in the form of a list.
#
# Note: It is not allowed to modify the lists. Also, not allowed to use explicit extra space (Hint: Use Recursion).
#
# Example :
#
# Input: First List: 5->6->3, Second List: 8->4->2
# Output: Resultant list: 1->4->0->5
# Explanation: Sum of 563 and 842 is 1405

# Python Iterative program to add
# two linked lists


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head
        self.list = None

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    # To add two new numbers
    def addTwoNumbers(self, list2):

        carry = 0
        current = self.head
        current2 = list2.head if hasattr(list2, 'head') else list2
        if current.next is not None and current2.next is not None:
            self.head = self.head.next
            list2 = list2.head.next if hasattr(list2, 'head') else list2.next
            carry = self.addTwoNumbers(list2)

        data = current.value + current2.value + carry
        carry = data // 10
        if self.list is None:
            self.list = LinkedList(Element(data % 10))
        else:
            self.list.append(Element(data % 10))

        return carry

    def printList(self, head):
        if head is not 0:
            print(head, end=" ")

        current = self.list.head
        self.reverse(current.next)
        print(current.value, end=" ")

    def reverse(self, current):
        if current.next:
            self.reverse(current.next)
        print(current.value, end=" ")
    




e_set1 = Element(5)
e_set2 = Element(6)
e_set3 = Element(3)
e_set4 = Element(8)
e_set5 = Element(4)
e_set6 = Element(2)

ll1 = LinkedList(e_set1)
ll1.append(e_set2)
ll1.append(e_set3)
ll2 = LinkedList(e_set4)
ll2.append(e_set5)
ll2.append(e_set6)

res = ll1.addTwoNumbers(ll2)
#ll1.reverse()
ll1.printList(res)